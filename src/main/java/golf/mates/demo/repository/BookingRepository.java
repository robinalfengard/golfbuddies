package golf.mates.demo.repository;

import golf.mates.demo.entities.Booking;
import org.springframework.data.repository.CrudRepository;

import java.awt.print.Book;

public interface BookingRepository extends CrudRepository<Booking, Long> {
}
