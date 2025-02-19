package crictracker.ipl_dashboard.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/team/{teamName}")
    public List<Match> getMatchesByTeam(@PathVariable String teamName) {
        return matchRepository.findByTeam1OrTeam2(teamName, teamName);
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
