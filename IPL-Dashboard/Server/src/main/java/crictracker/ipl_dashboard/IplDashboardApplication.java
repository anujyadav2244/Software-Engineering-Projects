package crictracker.ipl_dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "crictracker.ipl_dashboard.data")
public class IplDashboardApplication {

	public static void main(String[] args) {
		SpringApplication.run(IplDashboardApplication.class, args);
	}
}
                                        