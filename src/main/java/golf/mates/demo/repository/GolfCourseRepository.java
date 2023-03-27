package golf.mates.demo.repository;

import golf.mates.demo.entities.GolfCourse;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GolfCourseRepository extends CrudRepository<GolfCourse, Long> {
}
