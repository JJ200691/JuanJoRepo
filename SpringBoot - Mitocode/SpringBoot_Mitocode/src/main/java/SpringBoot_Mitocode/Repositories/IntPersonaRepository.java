package SpringBoot_Mitocode.Repositories;

import SpringBoot_Mitocode.Entities.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IntPersonaRepository extends JpaRepository<Persona, Integer>{

    public void registrar(String nombre);
}
