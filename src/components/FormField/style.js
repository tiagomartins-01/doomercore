import styled from 'styled-components';

export const FormFieldWrapper = styled.div`
position: relative;
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

export const Input = styled.input`
display: block;
background: #53585D;
color: #F5F5F5;
width: 550px;
height: 57px;
font-size: 18px;
outline: 0;
border: 2px solid rgb(0,0,0);

padding: 16px 16px;
margin-bottom: 25px;

resize: none;
border-radius: 240px;


&:focus {
  width: 800px;
  border: 2px solid rgb(0,83,0);
  transition: border-color .3s;
}

&:hover {
  transition: 0.25s;
  width: 800px;
}
@media (max-width: 800px) {
  width: 100%;

  &:hover {
    width: 100%;
    border: 2px solid rgb(0,83,0);
    transition: border-color .3s;
  }
}
`;
