package crictracker.ipl_dashboard.data;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import crictracker.ipl_dashboard.model.Match;

@Component
public class JobCompletionNotificationListener implements JobExecutionListener {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);
    private final MongoTemplate mongoTemplate;

    public JobCompletionNotificationListener(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("!!! JOB FINISHED! Verifying the data in MongoDB...");

            // Fetch some match records from MongoDB for verification
            List<Match> matches = mongoTemplate.findAll(Match.class, "matches"); // Updated collection name

            if (!matches.isEmpty()) {
                log.info("Sample Match Data from MongoDB:");
                matches.stream().limit(5).forEach(match ->
                        log.info("Team 1: {} | Team 2: {} | Date: {}", match.getTeam1(), match.getTeam2(), match.getDate()));
            } else {
                log.warn("No matches found in MongoDB!");
            }
        } else {
            log.error("!!! JOB FAILED! Batch job did not complete successfully.");
        }
    }
}