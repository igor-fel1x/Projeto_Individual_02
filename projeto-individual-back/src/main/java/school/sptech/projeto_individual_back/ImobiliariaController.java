package school.sptech.projeto_individual_back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.PreparedStatement;
import java.sql.Statement;

@RestController
@RequestMapping("/imobiliaria")
public class ImobiliariaController {

@Autowired
private JdbcTemplate jdbcTemplate;


    @PostMapping
    public ResponseEntity<Imobiliaria> criarJogo(@RequestBody Imobiliaria imovel) {

        if (imovel.getNome() == null || imovel.getNome().isBlank()) {
            return ResponseEntity.status(400).build();
        }

        String sql = "INSERT INTO imovel(titulo, tipo, valor, quartos, metragem, bairro) values (?,?,?,?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, imovel.getTitulo());
            ps.setString(2, imovel.getTipo());
            ps.setInt(2, imovel.getValor());
            ps.setInt(2, imovel.getQuartos());
            ps.setDouble(2, imovel.getMetragem());
            ps.setString(2, imovel.getBairro());
            return ps;
        }, keyHolder);

        Integer idInserido = keyHolder.getKeyAs(Integer.class);
        imovel.setId(idInserido);
        return ResponseEntity.status(201).body(imovel);
    }

}
