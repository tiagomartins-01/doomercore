import React from 'react';
import PageDefault from '../../../components/PageDefault';
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
      </PageDefault>
    )
  }

  export default CadastroVideo;