package SpringBoot_Mitocode.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import SpringBoot_Mitocode.Repositories.IntPersonaRepository;

@Service
public class PersonaService implements IntPersonaService {

    @Autowired //Inyección de dependencias(crea instancias, la utiliza y la borra)
    private IntPersonaRepository DAO;

    @Override
    public void registrar(String nombre) {
        DAO.registrar(nombre);
    }

}
