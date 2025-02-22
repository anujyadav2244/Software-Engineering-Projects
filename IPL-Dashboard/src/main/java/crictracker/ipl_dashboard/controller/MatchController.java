// package crictracker.ipl_dashboard.controller;

// import java.time.LocalDate;
// import java.time.format.DateTimeFormatter;
// import java.util.List;

// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.data.domain.Pageable;

// import crictracker.ipl_dashboard.model.Match;
// import crictracker.ipl_dashboard.repository.MatchRepository;

// @RestController
// @RequestMapping("/match")
// @CrossOrigin(origins = "http://localhost:5173") // Allow frontend access
// public class MatchController {

//     private final MatchRepository matchRepository;
//     private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy");

//     public MatchController(MatchRepository matchRepository) {
//         this.matchRepository = matchRepository;
//     }

//     // ✅ Get all matches for a team
//     @GetMapping("/team/{teamName}")
//     public List<Match> getMatchesByTeam(@PathVariable String teamName) {
//         return matchRepository.findByTeam1OrTeam2(teamName, Pageable.unpaged()).getContent();
//     }
    
//     // ✅ Get matches by team & season
//     @GetMapping("/team/{teamName}/matches")
//     public List<Match> getMatchesByTeamAndSeason(@PathVariable String teamName, @RequestParam int season) {
//         // IPL usually starts in March or April, so adjust season dates
//         LocalDate startDate = LocalDate.of(season, 3, 1); // Approximate IPL start date
//         LocalDate endDate = LocalDate.of(season, 12, 31); // Ends by December (safety margin)

//         return matchRepository.findMatchesByTeamBetweenDates(teamName, startDate, endDate);
//     }
// }


package crictracker.ipl_dashboard.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.time.format.DateTimeFormatter;

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

        List<Match> matches = this.matchRepository.findByTeam1OrTeam2(teamName, Pageable.unpaged()).getContent();

        // Pageable pageable = PageRequest.of(0, 4);
        // matches = matchRepository.findByTeam1OrTeam2(teamName,
        // pageable).getContent();

        return matches.stream()
                .sorted((m1, m2) -> LocalDate.parse(m2.getDate(), FORMATTER)
                        .compareTo(LocalDate.parse(m1.getDate(), FORMATTER)))
                .collect(Collectors.toList());
    }

    @GetMapping("/latest/{teamName}")
    public List<Match> getLatestMatches(@PathVariable String teamName, @RequestParam(defaultValue = "10") int count) {
        List<Match> matches = matchRepository.findLatestMatchesByTeam(teamName, count);

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
    public List<TeamStats> getTeamStats() { // Fixed capitalization
        return customMatchRepository.getTotalMatchesByTeamName();
    }
}