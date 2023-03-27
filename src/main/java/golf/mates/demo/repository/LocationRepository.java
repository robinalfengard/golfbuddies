package golf.mates.demo.repository;

import golf.mates.demo.entities.Location;
import org.springframework.data.repository.CrudRepository;

public interface LocationRepository extends CrudRepository <Location, Long> {
}
