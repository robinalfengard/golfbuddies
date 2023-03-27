package golf.mates.demo.repository;

import golf.mates.demo.entities.GolfCourse;
import org.springframework.data.repository.CrudRepository;

public interface GolfCourseRepository extends CrudRepository<GolfCourse, Long> {
}
