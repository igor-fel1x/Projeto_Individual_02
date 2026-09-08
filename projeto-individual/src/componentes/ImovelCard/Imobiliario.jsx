import styles from './Imobiliario.module.css';

function Imobiliario() {
  return (
    <div className={styles.container}>
      <div className={styles.cabecalho}>
        <h2>Painel do Corretor</h2>
        <p>Cadastre um novo imóvel no sistema</p>
      </div>

      <div className={styles.formulario}>
        <div className={styles.grupoInput}>
          <h4>Título do Anúncio</h4>
          <input type="text" />
        </div>

        {/* Agrupando campos menores na mesma linha */}
        <div className={styles.linhaDupla}>
          <div className={styles.grupoInput}>
            <h4>Tipo de Imóvel</h4>
            <select>
              <option value="apartamento">Apartamento</option>
              <option value="casa">Casa</option>
            </select>
          </div>

          <div className={styles.grupoInput}>
            <h4>Valor (R$)</h4>
            <input type="number" />
          </div>
        </div>

        <div className={styles.linhaDupla}>
          <div className={styles.grupoInput}>
            <h4>Quartos</h4>
            <input type="number" />
          </div>

          <div className={styles.grupoInput}>
            <h4>Metragem (m²)</h4>
            <input type="number" />
          </div>
        </div>

        <div className={styles.grupoInput}>
          <h4>CEP (Localização)</h4>
          <input type="text"  maxLength="9" />
        </div>

        <button type="button" className={styles.botaoSalvar}>
          Cadastrar Imóvel
        </button>
      </div>
    </div>
  );
}

export default Imobiliario;