package crictracker.ipl_dashboard.data;

<<<<<<< HEAD
import lombok.Data;

@Data
=======
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "matches")
>>>>>>> 22ade01c6c48f8508deefc4b54e5a7b4c2e8fd1b
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
<<<<<<< HEAD
=======
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getSeason() {
        return season;
    }
    public void setSeason(String season) {
        this.season = season;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getMatchType() {
        return matchType;
    }
    public void setMatchType(String matchType) {
        this.matchType = matchType;
    }
    public String getVenue() {
        return venue;
    }
    public void setVenue(String venue) {
        this.venue = venue;
    }
    public String getTeam1() {
        return team1;
    }
    public void setTeam1(String team1) {
        this.team1 = team1;
    }
    public String getTeam2() {
        return team2;
    }
    public void setTeam2(String team2) {
        this.team2 = team2;
    }
    public String getTossWinner() {
        return tossWinner;
    }
    public void setTossWinner(String tossWinner) {
        this.tossWinner = tossWinner;
    }
    public String getTossDecision() {
        return tossDecision;
    }
    public void setTossDecision(String tossDecision) {
        this.tossDecision = tossDecision;
    }
    public String getWinner() {
        return winner;
    }
    public void setWinner(String winner) {
        this.winner = winner;
    }
    public String getResult() {
        return result;
    }
    public void setResult(String result) {
        this.result = result;
    }
    public String getResultMargin() {
        return resultMargin;
    }
    public void setResultMargin(String resultMargin) {
        this.resultMargin = resultMargin;
    }
    public String getTargetRuns() {
        return targetRuns;
    }
    public void setTargetRuns(String targetRuns) {
        this.targetRuns = targetRuns;
    }
    public String getTargetOvers() {
        return targetOvers;
    }
    public void setTargetOvers(String targetOvers) {
        this.targetOvers = targetOvers;
    }
    public String getPlayerOfMatch() {
        return playerOfMatch;
    }
    public void setPlayerOfMatch(String playerOfMatch) {
        this.playerOfMatch = playerOfMatch;
    }
    public String getMethod() {
        return method;
    }
    public void setMethod(String method) {
        this.method = method;
    }
    public String getUmpire1() {
        return umpire1;
    }
    public void setUmpire1(String umpire1) {
        this.umpire1 = umpire1;
    }
    public String getUmpire2() {
        return umpire2;
    }
    public void setUmpire2(String umpire2) {
        this.umpire2 = umpire2;
    }


>>>>>>> 22ade01c6c48f8508deefc4b54e5a7b4c2e8fd1b
}