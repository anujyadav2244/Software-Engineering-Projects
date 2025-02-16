package crictracker.ipl_dashboard.data;

import crictracker.ipl_dashboard.model.Match;
<<<<<<< HEAD
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

=======
import org.springframework.context.annotation.Bean;
>>>>>>> 22ade01c6c48f8508deefc4b54e5a7b4c2e8fd1b
import org.springframework.context.annotation.Configuration;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
<<<<<<< HEAD
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
=======
import org.springframework.batch.item.data.MongoItemWriter;
>>>>>>> 22ade01c6c48f8508deefc4b54e5a7b4c2e8fd1b
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
<<<<<<< HEAD

=======
import org.springframework.data.mongodb.core.MongoTemplate;
>>>>>>> 22ade01c6c48f8508deefc4b54e5a7b4c2e8fd1b

@Configuration
@EnableBatchProcessing
public class BatchConfig {

    private final String[] FIELDS_NAME = new String[]{
        "id", "season", "city", "date", "match_type", "venue", "team1", "team2", "toss_winner", "toss_decision",
        "winner", "result", "result_margin", "target_runs", "target_overs", "player_of_match", "method", "umpire1",
        "umpire2"
    };
    

    // MongoTemplate bean for MongoDB interaction
    @Bean
    public MongoTemplate mongoTemplate() {
        return new MongoTemplate(new MongoClient("localhost"), "ipl_db");  // Adjust connection details as needed
    }

    @Bean
    public FlatFileItemReader<MatchInput> reader() {
        return new FlatFileItemReaderBuilder<MatchInput>()
                .name("MatchInputItemReader")
                .resource(new ClassPathResource("matches-data.csv"))
                .delimited()
                .names(FIELDS_NAME)
                .fieldSetMapper(new BeanWrapperFieldSetMapper<MatchInput>() {{
                    setTargetType(MatchInput.class);
                }})
                .build();
    }

    @Bean
    public MatchDataProcessor processor() {
        return new MatchDataProcessor();
    }

    @Bean
    public MongoItemWriter<Match> writer(MongoTemplate mongoTemplate) {
        MongoItemWriter<Match> writer = new MongoItemWriter<>();
        writer.setTemplate(mongoTemplate);
        writer.setCollection("matches"); // Writing to "matches" collection
        return writer;
    }

    @Bean
    public Job importUserJob(JobRepository jobRepository, Step step1, JobCompletionNotificationListener listener) {
        return new JobBuilder("importUserJob", jobRepository)
                .listener(listener)
                .start(step1)
                .build();
    }

    @Bean
<<<<<<< HEAD
    public Step step1(JobRepository jobRepository, DataSourceTransactionManager transactionManager,
            FlatFileItemReader<MatchInput> reader, MatchDataProcessor processor, JdbcBatchItemWriter<Match> writer) {
        return new StepBuilder("step1", jobRepository)
                .<MatchInput, Match>chunk(10, transactionManager)
=======
    public Step step1(JobRepository jobRepository, FlatFileItemReader<MatchInput> reader, 
                      MatchDataProcessor processor, MongoItemWriter<Match> writer) {
        return new StepBuilder("step1", jobRepository)
                .<MatchInput, Match>chunk(10)
>>>>>>> 22ade01c6c48f8508deefc4b54e5a7b4c2e8fd1b
                .reader(reader)
                .processor(processor)
                .writer(writer)
                .build();
    }
    

    @Bean
    public DataSourceTransactionManager transactionManager(DataSource dataSource) {
    return new DataSourceTransactionManager(dataSource);
}

    

}
