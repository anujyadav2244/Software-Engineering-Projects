package crictracker.ipl_dashboard.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import crictracker.ipl_dashboard.model.Match;



public interface MatchRepository extends MongoRepository<Match, String> {
    List<Match> findByTeam1OrTeam2(String team1, String team2);

    long countByTeam1OrTeam2(String team1, String team2);

    List<Match> findByTeam1(String team1);
    List<Match> findByTeam2(String team2);



    
}


