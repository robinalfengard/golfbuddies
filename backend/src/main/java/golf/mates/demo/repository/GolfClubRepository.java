package golf.mates.demo.repository;

import golf.mates.demo.entities.GolfClub;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GolfClubRepository extends CrudRepository<GolfClub, Long> {
}
