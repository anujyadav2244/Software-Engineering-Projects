package crictracker.ipl_dashboard.repository;

import java.util.List;

import crictracker.ipl_dashboard.model.TeamMatchCount;
import crictracker.ipl_dashboard.model.TeamStats;

public interface CustomMatchRepository {
    List<TeamMatchCount> getTotalMatchesByTeam();  
    List<TeamStats> getTotalMatchesByTeamName();   
}
