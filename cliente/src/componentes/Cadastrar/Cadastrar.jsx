import { useState } from 'react';
import styles from './Cadastrar.module.css';

function Cadastro() {

  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [quartos, setQuartos] = useState('');
  const [metragem, setMetragem] = useState('');
  const [bairro, setBairro] = useState('');

  const criarImovel = async function() {
    const imovel = {
      titulo: titulo,
      tipo: tipo,
      valor: valor,
      quartos: quartos,
      metragem: metragem,
      bairro: bairro
    };

    try {
     
      const resposta = await fetch("http://localhost:8080/imobiliaria", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Imovel: imovel})
      });

      if (resposta.status === 201) {
        alert("Imóvel Cadastrado com Sucesso");
        setTitulo('');
        setTipo('');
        setValor('');
        setQuartos('');
        setMetragem('');
        setBairro('');

      } else {
        alert("Erro ao cadastrar imóvel");
      }
    } catch (erro) {
      console.log("Falhou:", erro.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.cabecalho}>
        <h2>Cadastrar Novo Imóvel</h2>
      </div>

      <div className={styles.formulario}>
        
        <div className={styles.linhaDupla}>
          <div className={styles.grupoInput}>
            <h4>Título do Anúncio</h4>
            <input 
              type="text" 
              name="titulo" 
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)} 
              placeholder="Ex: Apartamento Moderno" 
            />
          </div>
          <div className={styles.grupoInput}>
            <h4>Tipo de Imóvel</h4>
            <select name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="">Selecione</option>
              <option value="apartamento">Apartamento</option>
              <option value="casa">Casa</option>
            </select>
          </div>
        </div>

        <div className={styles.linhaDupla}>
          <div className={styles.grupoInput}>
            <h4>Valor (R$)</h4>
            <input 
              type="number" 
              name="valor" 
              value={valor} 
              onChange={(e) => setValor(e.target.value)} 
            />
          </div>
          <div className={styles.grupoInput}>
            <h4>Quartos</h4>
            <input 
              type="number" 
              name="quartos" 
              value={quartos} 
              onChange={(e) => setQuartos(e.target.value)} 
            />
          </div>
        </div>

        <div className={styles.linhaDupla}>
          <div className={styles.grupoInput}>
            <h4>Metragem (m²)</h4>
            <input 
              type="number" 
              name="metragem" 
              value={metragem} 
              onChange={(e) => setMetragem(e.target.value)} 
            />
          </div>
          <div className={styles.grupoInput}>
            <h4>Bairro</h4>
            <input 
              type="text" 
              name="bairro" 
              value={bairro} 
              onChange={(e) => setBairro(e.target.value)} 
            />
          </div>
        </div>

        <button className={styles.botaoSalvar} onClick={criarImovel}>
          Cadastrar Imóvel
        </button>

      </div>
    </div>
  );
}

export default Cadastro;