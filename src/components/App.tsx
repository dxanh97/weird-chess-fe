import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </Wrapper>
  );
};

export default App;
