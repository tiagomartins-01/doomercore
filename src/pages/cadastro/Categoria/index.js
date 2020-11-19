import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PageCadastro from '../../../components/PageCadastro';
import FormField from '../../../components/FormField';
import ButtonLink from '../../../components/Button';

  function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
   }

  const [categorias, setCategorias]= useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
      );
  }

    return(
      <PageCadastro>
        <h1>
          Cadastro de Categoria:
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(valoresIniciais)
        }}>

          <FormField
            placeholder="Nome da Categoria"
            type="text"
            name="nome"
            value = {values.nome}
            onChange={handleChange}
          />

          <FormField
            placeholder="Descrição"
            type="textarea"
            name="descricao"
            value = {values.descricao}
            onChange={handleChange}
          />

          <FormField
            placeholder="Cor"
            type="color"
            name="cor"
            value = {values.cor}
            onChange={handleChange}
          />

           <ButtonLink>
             Cadastrar
           </ButtonLink>

        </form>

        <a href="/">
          <ButtonLink> 
            Ir para Home
          </ButtonLink>
        </a>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
        
      </PageCadastro>
    );
  }

  export default CadastroCategoria;