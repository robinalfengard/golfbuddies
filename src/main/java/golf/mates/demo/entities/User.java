package golf.mates.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
  /*  private Double handicap;
    private Boolean hasCar;*/
    /*private Double rating;*/
//    private Long locationId;


    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

}
