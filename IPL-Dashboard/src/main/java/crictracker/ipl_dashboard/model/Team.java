package crictracker.ipl_dashboard.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Team {

    @Id
    private long id;
    private String team_name;
    private long total_matches;
    private long total_wins;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
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
