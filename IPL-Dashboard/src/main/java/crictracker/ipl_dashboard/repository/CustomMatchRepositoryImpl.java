package crictracker.ipl_dashboard.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.ConditionalOperators;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import crictracker.ipl_dashboard.model.TeamMatchCount;
import crictracker.ipl_dashboard.model.TeamStats;

@Repository
public class CustomMatchRepositoryImpl implements CustomMatchRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    
    @Override
    public List<TeamMatchCount> getTotalMatchesByTeam() {
        Aggregation aggregation = Aggregation.newAggregation(
            Aggregation.group("team1")
                .count().as("total_matches"),
            Aggregation.project()
                .and("_id").as("team_name")
                .and("total_matches").as("total_matches")
        );

        AggregationResults<TeamMatchCount> results = mongoTemplate.aggregate(aggregation, "matches", TeamMatchCount.class);
        return results.getMappedResults();
    }

    @Override
    public List<TeamStats> getTotalMatchesByTeamName() {
        Aggregation team1Aggregation = Aggregation.newAggregation(
            Aggregation.group("team1")
                .count().as("total_matches")
                .sum(ConditionalOperators.when(Criteria.where("winner").is("$team1")).then(1).otherwise(0))
                .as("total_wins"),
            Aggregation.project()
                .and("_id").as("team_name")
                .and("total_matches").as("total_matches")
                .and("total_wins").as("total_wins")
        );

        Aggregation team2Aggregation = Aggregation.newAggregation(
            Aggregation.group("team2")
                .count().as("total_matches")
                .sum(ConditionalOperators.when(Criteria.where("winner").is("$team2")).then(1).otherwise(0))
                .as("total_wins"),
            Aggregation.project()
                .and("_id").as("team_name")
                .and("total_matches").as("total_matches")
                .and("total_wins").as("total_wins")
        );

        List<TeamStats> team1Results = mongoTemplate.aggregate(team1Aggregation, "matches", TeamStats.class).getMappedResults();
        List<TeamStats> team2Results = mongoTemplate.aggregate(team2Aggregation, "matches", TeamStats.class).getMappedResults();

        return mergeTeamStats(team1Results, team2Results);
    }

    private List<TeamStats> mergeTeamStats(List<TeamStats> team1, List<TeamStats> team2) {
        Map<String, TeamStats> mergedStats = new HashMap<>();

        for (TeamStats team : team1) {
            mergedStats.put(team.getTeam_name(), team);
        }

        for (TeamStats team : team2) {
            mergedStats.putIfAbsent(team.getTeam_name(), new TeamStats(team.getTeam_name(), 0, 0));
            TeamStats existing = mergedStats.get(team.getTeam_name());
            existing.setTotal_matches(existing.getTotal_matches() + team.getTotal_matches());
            existing.setTotal_wins(existing.getTotal_wins() + team.getTotal_wins());
        }

        return new ArrayList<>(mergedStats.values());
    }
}
