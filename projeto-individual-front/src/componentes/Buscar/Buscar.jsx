import styles from './Buscar.module.css';

function Buscar() {
  return (
    <div className={styles.container}>
      
      <div className={styles.painel}>
        <h2>Encontre seu Imóvel</h2>
        
        <div className={styles.inputs}>
          <div>
            <label>Bairro</label>
            <input type="text"  />
          </div>

          <div>
            <label>Tipo</label>
            <select>
              <option value="">Todos</option>
              <option value="apartamento">Apartamento</option>
              <option value="casa">Casa</option>
            </select>
          </div>

          <div>
            <label>Preço Máx (R$)</label>
            <input type="number" />
          </div>

          <div>
            <label>Quartos (Mínimo)</label>
            <input type="number" />
          </div>
        </div>

        <div className={styles.botoes}>
          <button className={styles.botaoTudo}>Listar Tudo</button>
          <button className={styles.botaoFiltro}>Listar por Filtro</button>
        </div>
      </div>

      <div className={styles.resultados}>
        <h3>Imóveis Disponíveis</h3>
        
        <div className={styles.listaImoveis}>
          
          
          <div className={styles.card}>
             <h4>Casa com Quintal</h4>
             <p>3 Quartos | R$ 450.000</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Buscar;