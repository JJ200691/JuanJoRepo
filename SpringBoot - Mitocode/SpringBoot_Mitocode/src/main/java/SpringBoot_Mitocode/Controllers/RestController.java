package SpringBoot_Mitocode.Controllers;

import SpringBoot_Mitocode.Entities.Persona;
import SpringBoot_Mitocode.Repositories.IntPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class RestController {
    
    @Autowired
    private IntPersonaRepository dao;
    
    @GetMapping //Obtener datos
    public List<Persona> listar() {
        return dao.findAll();
    }
    
    @PostMapping //Insertar Datos
    public void insertar(@RequestBody Persona p) {
        dao.save(p);
    }
    
    @PutMapping //modificar datos
    public void modificar(@RequestBody Persona p) {
        dao.save(p);
    }
    
    @DeleteMapping //Eliminar datos
    public void eliminar(@PathVariable("id") Integer id) {
        dao.deleteById(id);
    }
}
