package crictracker.ipl_dashboard.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import crictracker.ipl_dashboard.model.Match;



public interface MatchRepository extends MongoRepository<Match, String> {
    @Query("{ '$or': [ { 'team1': ?0 }, { 'team2': ?0 } ] }")
    Page<Match> findByTeam1OrTeam2(String teamName, Pageable pageable);

    long countByTeam1OrTeam2(String team1, String team2);

    List<Match> findByTeam1(String team1);
    List<Match> findByTeam2(String team2);

    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        Pageable pageable = PageRequest.of(0, count, Sort.by(Sort.Direction.DESC, "date"));
        return findByTeam1OrTeam2(teamName, pageable).getContent();
    }
    
    
    
    


    
}


