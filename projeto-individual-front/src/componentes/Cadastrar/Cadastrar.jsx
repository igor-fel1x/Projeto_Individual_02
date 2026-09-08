import styles from './Cadastrar.module.css';

function Cadastro() {
  return (
    <div className={styles.container}>
      <div className={styles.cabecalho}>
        <h2>Painel do Corretor</h2>
        <p>Cadastre um novo imóvel no sistema</p>
      </div>

      <div className={styles.formulario}>
        <div className={styles.grupoInput}>
          <h4>Título do Anúncio</h4>
          <input type="text"/>
        </div>
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
          <h4>Bairro</h4>
          <input type="text"/>
        </div>

        <button type="button" className={styles.botaoSalvar}>
          Cadastrar Imóvel
        </button>
      </div>
    </div>
  );
}

export default Cadastro;