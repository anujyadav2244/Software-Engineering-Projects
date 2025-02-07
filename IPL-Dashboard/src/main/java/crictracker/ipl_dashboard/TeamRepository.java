package crictracker.ipl_dashboard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import crictracker.ipl_dashboard.model.Match;


@Repository
@CrossOrigin
public interface TeamRepository extends JpaRepository<Match, Long> {
}
