import styled from 'styled-components';


export const FooterBase = styled.footer`
.Logo{
    height: 20%;
    width: 25%;
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
    height: 30%;
    width: 30%;
    margin-right: 50px;
  }
    margin-bottom: 50px;
 
  }
`;
