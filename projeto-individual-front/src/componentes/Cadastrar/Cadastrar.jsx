import { useState } from 'react';
import styles from './Cadastrar.module.css';

function Cadastro() {

  // 1. Um estado individual para cada campo
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [quartos, setQuartos] = useState('');
  const [metragem, setMetragem] = useState('');
  const [bairro, setBairro] = useState('');

  const criarImovel = async function() {
    // 2. Agrupamos os estados individuais em um único objeto antes de enviar
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
        <p>Preencha os dados abaixo para anunciar na plataforma.</p>
      </div>

      <div className={styles.formulario}>
        
        <div className={styles.linhaDupla}>
          <div className={styles.grupoInput}>
            <label>Título do Anúncio</label>
            <input 
              type="text" 
              name="titulo" 
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)} 
              placeholder="Ex: Apartamento Moderno" 
            />
          </div>
          <div className={styles.grupoInput}>
            <label>Tipo de Imóvel</label>
            <select name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="">Selecione</option>
              <option value="apartamento">Apartamento</option>
              <option value="casa">Casa</option>
            </select>
          </div>
        </div>

        <div className={styles.linhaDupla}>
          <div className={styles.grupoInput}>
            <label>Valor (R$)</label>
            <input 
              type="number" 
              name="valor" 
              value={valor} 
              onChange={(e) => setValor(e.target.value)} 
            />
          </div>
          <div className={styles.grupoInput}>
            <label>Quartos</label>
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
            <label>Metragem (m²)</label>
            <input 
              type="number" 
              name="metragem" 
              value={metragem} 
              onChange={(e) => setMetragem(e.target.value)} 
            />
          </div>
          <div className={styles.grupoInput}>
            <label>Bairro</label>
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