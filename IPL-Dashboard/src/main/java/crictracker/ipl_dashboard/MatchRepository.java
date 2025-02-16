package crictracker.ipl_dashboard;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import crictracker.ipl_dashboard.model.Match;

public interface MatchRepository extends MongoRepository<Match, String> {
    List<Match> findByTeam1(String team1);  
}

