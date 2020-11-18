import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';
import ButtonLink from '../../../components/Button';

function CadastroVideo(){

    return(
      <PageDefault>
        <h1>Cadastro de Video</h1>
        <form>
        <FormField
            placeholder="Título do Vídeo"
            type="text"
            name="title"
          />

          <FormField
            placeholder="URL"
            type="text"
            name="url"
          />

          <FormField
            placeholder="Categoria"
            type="text"
            name="categoria"
          />

          <ButtonLink>
            Cadastrar
          </ButtonLink>
          </form>

        <Link to="/cadastro/Categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;