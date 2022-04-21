package SpringBoot_Mitocode;

import SpringBoot_Mitocode.Entities.Usuario;
import SpringBoot_Mitocode.Repositories.IntUsuarioRepository;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
class SpringBootMitocodeApplicationTests {

    @Autowired
    private IntUsuarioRepository dao;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Test
    void crearUsuarioTest() {

        Usuario us = new Usuario();
        us.setId(1);
        us.setNombre("Juanjo");
        us.setClave(encoder.encode("123456"));//Con esta herramienta codificamos la clave para volverla mas segura
        Usuario retorno = dao.save(us);

        assertTrue(retorno.getClave().equalsIgnoreCase(us.getClave()));

    }

}
