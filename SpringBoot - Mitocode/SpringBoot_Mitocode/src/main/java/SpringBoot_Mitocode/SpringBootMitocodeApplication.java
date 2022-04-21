package SpringBoot_Mitocode;

import SpringBoot_Mitocode.Services.IntPersonaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootMitocodeApplication implements CommandLineRunner {
//Se utiliza CommandLineRunner para poder mostrar por consola
    
    private static Logger LOG = LoggerFactory.getLogger(SpringBootMitocodeApplication.class);
    private IntPersonaService PersonaService;

    public static void main(String[] args) {
        SpringApplication.run(SpringBootMitocodeApplication.class, args);
    }
    
    @Override
    public void run(String... args) throws Exception {
        LOG.info("Hola Coders");
        LOG.warn("Cuidado!!");
        PersonaService.registrar("Juan José");
    }
    
}
