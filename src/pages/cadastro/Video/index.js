import React from 'react';
import PageCadastro from '../../../components/PageCadastro';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';
import ButtonLink from '../../../components/Button';

function CadastroVideo(){

    return(
      <PageCadastro>
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

        <ButtonLink>
          <a  href="/cadastro/Categoria">
            Cadastrar Categoria
          </a>
        </ButtonLink>
      </PageCadastro>
    )
  }

  export default CadastroVideo;