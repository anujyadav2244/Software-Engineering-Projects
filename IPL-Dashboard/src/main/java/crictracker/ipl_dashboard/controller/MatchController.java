package crictracker.ipl_dashboard.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crictracker.ipl_dashboard.model.Match;
import crictracker.ipl_dashboard.repository.MatchRepository;

@RestController
@RequestMapping("/match")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MatchController {
    
    private final MatchRepository matchRepository;

    public MatchController(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }


    @GetMapping("/team/{teamName}")
    public List<Match> getMatchesByTeam(@PathVariable String teamName) {
        List<Match> matches = matchRepository.findByTeam1OrTeam2(teamName, teamName);

        for (Match match : matches) {
            match.setDate(match.getSeason()); // Convert season field
        }

        return matches;
    }

    
}
