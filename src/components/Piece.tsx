import React from 'react';
import styled from 'styled-components';

import pieceTypeMap from '../utils/piece-type-map';

import { ActivePiece, Color } from '../utils/types';

const Wrapper = styled.div<{ pieceColor: Color }>`
  display: flex;
  svg {
    fill: ${(props) => (props.pieceColor === Color.Light ? 'white' : 'black')};
    height: 30px;
    width: 30px;
  }
`;

const Piece: React.FC<ActivePiece> = ({ type, color, position }) => {
  return <Wrapper pieceColor={color}>{pieceTypeMap[type]}</Wrapper>;
};

export default Piece;
