package crictracker.ipl_dashboard.model;


public class TeamMatchCount {
    private String _id;  
    private int total_matches;

    public String getId() {
        return _id;
    }

    public void setId(String _id) {
        this._id = _id;
    }

    public int getTotal_matches() {
        return total_matches;
    }

    public void setTotal_matches(int total_matches) {
        this.total_matches = total_matches;
    }
}
