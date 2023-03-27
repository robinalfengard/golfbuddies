package golf.mates.demo.repository;

import golf.mates.demo.entities.GolfClub;
import org.springframework.data.repository.CrudRepository;

public interface GolfClubRepository extends CrudRepository<GolfClub, Long> {
}
