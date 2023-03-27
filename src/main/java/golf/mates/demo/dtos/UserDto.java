package golf.mates.demo.dtos;


import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserDto {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

}
