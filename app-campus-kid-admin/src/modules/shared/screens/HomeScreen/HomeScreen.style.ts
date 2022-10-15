import styled from "styled-components";

const ExampleDiv = styled.div`
    background: red;
`;

const Card = styled.div`
    border-radius: 20px;
    background: gray;
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

const Square = styled.div`
    height: 50px;
    background: red;
    margin: 10px;
    flex-grow: 1;
`;


export { ExampleDiv, Card, Square };