package crictracker.ipl_dashboard.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class MatchService {
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd/MM");

    public LocalDate parseSeason(String season) {
        try {
            return LocalDate.parse(season + "/01", FORMATTER); // Append "/01" to create a valid date
        } catch (DateTimeParseException e) {
            System.err.println("Invalid date format: " + season);
            return null;
        }
    }
}

