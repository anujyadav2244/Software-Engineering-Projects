package crictracker.ipl_dashboard.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Match {
    
    @Id
    private long id;
    private LocalDate season;
    private String city;
    private LocalDate date;
    private String matchType;
    private String venue;
    private String team1;
    private String team2;
    private String tossWinner;
    private String tossDecision;
    private String winner;
    private String result;
    private int  resultMargin;
    private int targetRuns;
    private int targetOvers; 
    private String playerOfMatch;
    private String method;
    private String umpire1;
    private String umpire2;
    
}
