package school.sptech.projeto_individual_back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/imobiliaria")
@CrossOrigin(origins = "*")
public class ImobiliariaController {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    @PostMapping
    public ResponseEntity<Imobiliaria> cadastrarImovel(@RequestBody Imobiliaria imovel) {
        if (imovel.getTitulo() == null || imovel.getTitulo().isBlank()) {
            return ResponseEntity.status(400).build();
        }

        String sql = "INSERT INTO imovel(titulo, tipo, valor, quartos, metragem, bairro) values (?,?,?,?,?,?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, imovel.getTitulo());
            ps.setString(2, imovel.getTipo());
            ps.setDouble(3, imovel.getValor());
            ps.setInt(4, imovel.getQuartos());
            ps.setDouble(5, imovel.getMetragem());
            ps.setString(6, imovel.getBairro());
            return ps;
        }, keyHolder);

        Number idInserido = keyHolder.getKey();
        if (idInserido != null) {
            imovel.setId(idInserido.intValue());
        }
        return ResponseEntity.status(201).body(imovel);
    }


    @GetMapping
    public ResponseEntity<List<Imobiliaria>> listarTodos() {
        String sql = "SELECT * FROM imovel";

        List<Imobiliaria> imoveis = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Imobiliaria.class));

        if (imoveis.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(imoveis);
    }


    @GetMapping("/filtro")
    public ResponseEntity<List<Imobiliaria>> buscarPorFiltro(
            @RequestParam(required = false) String tipo,
            @RequestParam(required = false) String bairro,
            @RequestParam(required = false) Double precoMax,
            @RequestParam(required = false) Integer quartosMin) {

        String sql = "SELECT * FROM imovel WHERE 1=1";
        List<Object> parametros = new ArrayList<>();

        if (tipo != null && !tipo.isBlank()) {
            sql += " AND tipo = ?";
            parametros.add(tipo);
        }

        if (bairro != null && !bairro.isBlank()) {
            sql += " AND bairro = ?";
            parametros.add(bairro);
        }

        if (precoMax != null) {
            sql += " AND valor <= ?";
            parametros.add(precoMax);
        }

        if (quartosMin != null) {
            sql += " AND quartos >= ?";
            parametros.add(quartosMin);
        }
        List<Imobiliaria> imoveis = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Imobiliaria.class), parametros.toArray());
        if (imoveis.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(imoveis);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarImovel(@PathVariable Integer id) {
        String sql = "DELETE FROM imovel WHERE id = ?";

        int linhasAfetadas = jdbcTemplate.update(sql, id);

        if (linhasAfetadas == 0) {
            return ResponseEntity.status(404).build();
        }

        return ResponseEntity.status(204).build();
    }
}