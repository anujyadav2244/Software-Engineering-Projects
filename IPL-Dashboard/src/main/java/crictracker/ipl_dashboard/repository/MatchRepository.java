package crictracker.ipl_dashboard.repository;

import java.util.List;
import java.time.LocalDate;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import crictracker.ipl_dashboard.model.Match;

public interface MatchRepository extends MongoRepository<Match, String> {
    List<Match> findByTeam1OrTeam2(String team1, String team2);

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :startDate and : endDate order by date desc")
    List<Match> findMatchesByTeamBetweenDates(
        @Param("teamName")String teamName,
        @Param("startDate")LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );
}
