package crictracker.ipl_dashboard.data;

import crictracker.ipl_dashboard.model.Match;
import javax.sql.DataSource;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.batch.core.launch.support.RunIdIncrementer;

@Configuration
@CrossOrigin
public class BatchConfig {

    private final String[] FIELDS_NAME = new String[] {
            "id", "season", "city", "date", "match_type", "venue", "team1", "team2", "toss_winner", "toss_decision",
            "winner", "result", "result_margin", "target_runs", "target_overs", "player_of_match", "method", "umpire1",
            "umpire2"
    };

    @Bean
    public FlatFileItemReader<MatchInput> reader() {
        return new FlatFileItemReaderBuilder<MatchInput>()
                .name("matchInputItemReader")
                .resource(new ClassPathResource("matches-data.csv"))
                .delimited()
                .names(FIELDS_NAME)
                .fieldSetMapper(new BeanWrapperFieldSetMapper<MatchInput>() {
                    {
                        setTargetType(MatchInput.class);
                    }
                })
                .build();
    }

    @Bean
    public MatchDataProcessor processor() {
        return new MatchDataProcessor();
    }

    @Bean
    public JdbcBatchItemWriter<Match> writer(DataSource dataSource) {
        return new JdbcBatchItemWriterBuilder<Match>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO match (id,season,city,date,match_type,venue,team1,team2,toss_winner,toss_decision,winner,result,result_margin,target_runs,target_overs,player_of_match,method,umpire1,umpire2) "
                        + "VALUES(:id,:season,:city,:date,:matchType,:venue,:team1,:team2,:tossWinner,:tossDecision,:winner,:result,:resultMargin,:targetRuns,:targetOvers,:playerOfMatch,:method,:umpire1,:umpire2)")
                .dataSource(dataSource)
                .build();
    }

    @Bean
    public DataSource dataSource() {
        return DataSourceBuilder.create()
                .url("jdbc:mysql://localhost:3306/ipl-db")
                .username("root")
                .password("Anuj@53003230090")
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .build();
    }

    @Bean
    public Job importUserJob(JobCompletionNotificationListener listener, Step step1) {
        return jobBuilderFactory.get("importUserJob")
                .incrementer(new RunIdIncrementer()) // Corrected typo
                .listener(listener)
                .start(step1)
                .end()
                .build();
    }

    @Bean
    public Step step1(JdbcBatchItemWriter<Match> writer) {
        return stepBuilderFactory.get("step1")
                .<MatchInput, Match>chunk(10)
                .reader(reader())
                .processor(processor())
                .writer(writer)
                .build();
    }
}
