package golf.mates.demo;

import golf.mates.demo.entities.User;
import golf.mates.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepository) {
		return args -> {

			User user1 = new User("user1", "password");
			User user2 = new User("user2", "password");
			User user3 = new User("user3", "password");

			userRepository.save(user1);
			userRepository.save(user2);
			userRepository.save(user3);

		};
	}

}
