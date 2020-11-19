import styled from "styled-components";

const Button = styled.button`
        color: rgb(0,83,0);
        border: 1px solid rgb(0,83,0);
        background: var(--black);
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 24px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        outline: none;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        transition: opacity .3s;

        &:hover,
        &:focus {
        opacity: .5;
        }

        @media (max-width: 800px) {
                width: 100%;
                border-radius: 240px;
                margin-bottom: 25px;
        }
`;
export default Button