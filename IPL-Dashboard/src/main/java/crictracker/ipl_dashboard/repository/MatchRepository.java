package crictracker.ipl_dashboard.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import crictracker.ipl_dashboard.model.Match;

public interface MatchRepository extends MongoRepository<Match, Long> {
    List<Match> findByTeam1OrTeam2(String team1, String team2);
}
