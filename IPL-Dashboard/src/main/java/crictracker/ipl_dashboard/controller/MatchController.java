package crictracker.ipl_dashboard.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Pageable;

import crictracker.ipl_dashboard.model.Match;
import crictracker.ipl_dashboard.model.TeamMatchCount;
import crictracker.ipl_dashboard.model.TeamStats;
import crictracker.ipl_dashboard.repository.CustomMatchRepository;
import crictracker.ipl_dashboard.repository.MatchRepository;

@RestController
@RequestMapping("/match")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MatchController {

    private final MatchRepository matchRepository;
    private final CustomMatchRepository customMatchRepository;

    public MatchController(MatchRepository matchRepository, CustomMatchRepository customMatchRepository) {
        this.matchRepository = matchRepository;
        this.customMatchRepository = customMatchRepository;
    }

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy");


    @GetMapping("/team/{teamName}")
    public List<Match> getMatchesByTeam(@PathVariable String teamName) {
        List<Match> matches = matchRepository.findByTeam1OrTeam2(teamName, Pageable.unpaged()).getContent();

        // Convert String to LocalDate for sorting
        return matches.stream()
                .sorted((m1, m2) -> LocalDate.parse(m2.getDate(), FORMATTER)
                        .compareTo(LocalDate.parse(m1.getDate(), FORMATTER)))
                .collect(Collectors.toList());
    }


    @GetMapping("/total-matches")
    public List<TeamMatchCount> getTotalMatchesByTeam() {
        return customMatchRepository.getTotalMatchesByTeam();
    }

    @GetMapping("/total-matches/{teamName}")
    public long getTotalMatchesForTeam(@PathVariable String teamName) {
        return matchRepository.countByTeam1OrTeam2(teamName, teamName);
    }
 
    @GetMapping("/total-matches-all")
    public long getTotalMatches() {
        return matchRepository.count();
    }

    @GetMapping("/team-stats")
    public List<TeamStats> getTeamStats() {  // Fixed capitalization
        return customMatchRepository.getTotalMatchesByTeamName();
    }
}
