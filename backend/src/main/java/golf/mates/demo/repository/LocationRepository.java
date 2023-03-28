package golf.mates.demo.repository;

import golf.mates.demo.entities.Location;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LocationRepository extends CrudRepository <Location, Long> {

}
