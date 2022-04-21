package SpringBoot_Mitocode.Repositories;

import SpringBoot_Mitocode.Entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IntUsuarioRepository extends JpaRepository<Usuario, Integer> {
    
}
