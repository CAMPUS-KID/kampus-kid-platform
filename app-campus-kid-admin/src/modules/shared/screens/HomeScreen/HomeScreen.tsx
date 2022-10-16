import React from 'react';
import { ExampleDiv, Card,Square } from './HomeScreen.style';

const HomeScreen = () => {
  return (
    <>
      <ExampleDiv>Example div</ExampleDiv>
      <Card>
        <Square></Square>
        <Square></Square>
      </Card>
    </>
  );
}

export default HomeScreen;
