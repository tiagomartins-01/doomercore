import React from 'react';
import Header from '../Header';
import FooterCadastro from '../FooterCadastro';
import Main from '../Main';

function PageCadastro({children}){
    return(
        <>
            <Header />
                <Main>
                    {children}
                </Main>
            <FooterCadastro />
        </>
    );
}

export default PageCadastro;