package crictracker.ipl_dashboard.data;

import java.time.LocalDate;

import org.springframework.batch.item.ItemProcessor;

import crictracker.ipl_dashboard.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    @Override
    public Match process(final MatchInput matchInput) throws Exception {
        // Create a Match object from MatchInput
        Match match = new Match();
        match.setId(Long.parseLong(matchInput.getId()));
        match.setSeason(LocalDate.parse(matchInput.getSeason()));
        match.setCity(matchInput.getCity());
        match.setDate(LocalDate.parse(matchInput.getDate()));
        match.setMatchType(matchInput.getMatchType());
        match.setVenue(matchInput.getVenue());

        String firstInningTeam;
        String secondInningTeam;

        if ("bat".equals(matchInput.getTossDecision())) {
            firstInningTeam = matchInput.getTossWinner();
            secondInningTeam = matchInput.getTossWinner().equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
        } else {
            secondInningTeam = matchInput.getTossWinner();
            firstInningTeam = matchInput.getTossWinner().equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
        }

        match.setTeam1(firstInningTeam);
        match.setTeam2(secondInningTeam);
        match.setTossWinner(matchInput.getTossWinner());
        match.setTossDecision(matchInput.getTossDecision());
        match.setWinner(matchInput.getWinner());
        match.setResult(matchInput.getResult());
        match.setResultMargin(Integer.parseInt(matchInput.getResultMargin()));
        match.setTargetRuns(Integer.parseInt(matchInput.getTargetRuns()));
        match.setTargetOvers(Integer.parseInt(matchInput.getTargetOvers()));
        match.setPlayerOfMatch(matchInput.getPlayerOfMatch());
        match.setMethod(matchInput.getMethod());
        match.setUmpire1(matchInput.getUmpire1());
        match.setUmpire2(matchInput.getUmpire2());

        // Print match data to the console
        System.out.println("Processed match: " + match);

        return match;
    }
}