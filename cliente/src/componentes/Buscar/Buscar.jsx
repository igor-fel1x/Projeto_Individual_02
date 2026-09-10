import { useState } from 'react';
import styles from './Buscar.module.css';

function Buscar() {

  const [imoveis, setImoveis] = useState(null);

  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroBairro, setFiltroBairro] = useState('');
  const [filtroPrecoMax, setFiltroPrecoMax] = useState('');
  const [filtroQuartosMin, setFiltroQuartosMin] = useState('');

  const buscarTodos = async function () {
    try {
      const resposta = await fetch("http://localhost:8080/imobiliaria");

      if (resposta.status === 200) {
        const dados = await resposta.json();
        setImoveis(dados);
        setBuscaRealizada(true);
      } else if (resposta.status === 204) {
        setImoveis([]);
        setBuscaRealizada(true);
      } else {
        alert("Erro ao buscar a lista de imóveis.");
      }
    } catch (erro) {
      console.log("Falhou:", erro.message);
    }
  };

  const buscarPorFiltro = async function () {
    if (filtroTipo === '' && filtroBairro === '' && filtroPrecoMax === '' && filtroQuartosMin === '') {
      alert("Preencha pelo menos um dos filtros antes de buscar.");
      return;
    }

    try {
      let url = "http://localhost:8080/imobiliaria/filtro?";

      if (filtroTipo !== '') url += `tipo=${filtroTipo}&`;
      if (filtroBairro !== '') url += `bairro=${filtroBairro}&`;
      if (filtroPrecoMax !== '') url += `precoMax=${filtroPrecoMax}&`;
      if (filtroQuartosMin !== '') url += `quartosMin=${filtroQuartosMin}&`;

      const resposta = await fetch(url);

      if (resposta.status === 200) {
        const dados = await resposta.json();
        setImoveis(dados);
        setBuscaRealizada(true);
      } else if(resposta.status == 204){
        alert('Nenhum resultado encontrado para essa busca')
      }else if (resposta.status === 204) {
        setImoveis([]);
        setBuscaRealizada(true);
      } else {
        alert("Erro ao aplicar os filtros.");
      }
    } catch (erro) {
      console.log("Falhou:", erro.message);
    }
  };

  return (
    <div className={styles.painel}>
      <h2>Buscar Imóveis</h2>

      <div className={styles.inputs}>
        <div>
          <label>Tipo de Imóvel</label>
          <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
            <option value="">Todos os tipos</option>
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
          </select>
        </div>
        <div>
          <label>Bairro</label>
          <input
            type="text"
            placeholder="Ex: Centro"
            value={filtroBairro}
            onChange={(e) => setFiltroBairro(e.target.value)}
          />
        </div>
        <div>
          <label>Preço Máximo (R$)</label>
          <input
            type="number"
            placeholder="Ex: 500000"
            value={filtroPrecoMax}
            onChange={(e) => setFiltroPrecoMax(e.target.value)}
          />
        </div>
        <div>
          <label>Quartos (Mínimo)</label>
          <input
            type="number"
            placeholder="Ex: 2"
            value={filtroQuartosMin}
            onChange={(e) => setFiltroQuartosMin(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.botoes}>
        <button
          className={styles.botaoTudo}
          onClick={() => {
            setFiltroTipo('');
            setFiltroBairro('');
            setFiltroPrecoMax('');
            setFiltroQuartosMin('');
            buscarTodos();
          }} > Listar Tudo </button>

        <button className={styles.botaoFiltro} onClick={buscarPorFiltro}>
          Aplicar Filtro
        </button>
      </div>

      <div className={styles.resultados}>
        <h3>Resultados {imoveis !== null ? `(${imoveis.length})` : ''}</h3>
        <div className={styles.listaImoveis}>
          {imoveis === null && (
            <p>Nenhum imovel cadastrado</p>
          )}

          {imoveis !== null && imoveis.length === 0 && (
            <p>Nenhum imóvel encontrado para esta busca</p>
          )}

          {imoveis !== null && imoveis.length > 0 && (
            imoveis.map((imovel) => (
              <div key={imovel.id} className={styles.card}>
                <h4>{imovel.titulo}</h4>
                <p>{imovel.tipo} • {imovel.quartos} quartos</p>
                <p><strong>R$ {imovel.valor}</strong></p>
                <p>{imovel.metragem}m² - {imovel.bairro}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Buscar;