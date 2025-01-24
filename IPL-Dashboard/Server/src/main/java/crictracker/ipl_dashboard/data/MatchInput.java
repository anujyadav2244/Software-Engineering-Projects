package crictracker.ipl_dashboard.data;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class MatchInput {
    private String id;
    private String season;
    private String city;
    private String date;
    private String matchType;
    private String venue;
    private String team1;
    private String team2;
    private String tossWinner;
    private String tossDecision;
    private String winner;
    private String result;
    private String resultMargin;
    private String targetRuns;
    private String targetOvers; 
    private String playerOfMatch;
    private String method;
    private String umpire1;
    private String umpire2;
    
}
