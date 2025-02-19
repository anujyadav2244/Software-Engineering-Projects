package crictracker.ipl_dashboard.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "matches")  
public class TeamStats {


@Field("team_name")
private String team_name;

@Field("total_matches")
private long total_matches;

@Field("total_wins")
private long total_wins;


    public TeamStats() {}

    public TeamStats(String teamName, long totalMatches, long totalWins) {
        this.team_name = teamName;
        this.total_matches = totalMatches;
        this.total_wins = totalWins;
    }

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public long getTotal_matches() {
        return total_matches;
    }

    public void setTotal_matches(long total_matches) {
        this.total_matches = total_matches;
    }

    public long getTotal_wins() {
        return total_wins;
    }

    public void setTotal_wins(long total_wins) {
        this.total_wins = total_wins;
    }

    

    
}
