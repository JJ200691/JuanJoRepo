package SpringBoot_Mitocode.Controllers;

import SpringBoot_Mitocode.Entities.Persona;
import SpringBoot_Mitocode.Repositories.IntPersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @Autowired
    private IntPersonaRepository dao;

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        //Se agrega al modelo un atributo "name" para que se puede ver en la vista como una variable ${}
        Persona p = new Persona();
        p.setIdPersona(1);
        p.setNombre("JuanJo");
        dao.save(p);
        model.addAttribute("name", name);
        return "greeting";
    }

    @GetMapping("/listar")
    public String listar(Model model) {

        model.addAttribute("personas", dao.findAll());
        return "listar";

    }
}
