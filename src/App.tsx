import React from 'react';
import styled from 'styled-components';

import Board from './Board';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Board />
    </Wrapper>
  );
};

export default App;
