package SpringBoot_Mitocode.Repositories;

import SpringBoot_Mitocode.SpringBootMitocodeApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

@Repository
public abstract class PersonaRepository implements IntPersonaRepository {
    
    private static Logger LOG = LoggerFactory.getLogger(SpringBootMitocodeApplication.class);
    
    @Override
    public void registrar(String nombre) {
        LOG.info("Se registró a" + nombre);
        
    }
    
}
