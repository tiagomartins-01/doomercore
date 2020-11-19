import styled from 'styled-components';


export const FooterBase = styled.footer`
.Logo{
    height: 30%;
    width: 35%;
}
  background: var(--black);
  border-top: 2px solid rgb(0,83,0);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  
  @media (max-width: 800px) {
    .Logo{
    display: none;
  } 
  }
`;
