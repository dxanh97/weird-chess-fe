import React from 'react';
import styled from 'styled-components';

import { ActivePiece, Color, Rank, File } from '../utils/types';
import Piece from './Piece';

const Wrapper = styled.div<{
  squareColor: Color;
}>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.squareColor === Color.Light ? '#db9202' : '#4c9955'};
  color: white;
  cursor: pointer;
  user-select: none;
`;

interface Props {
  rank: Rank;
  file: File;
  color: Color;
  piece?: ActivePiece;
}

const Square: React.FC<Props> = ({ rank, file, color, piece }) => {
  return <Wrapper squareColor={color}>{piece && <Piece {...piece} />}</Wrapper>;
};

export default Square;
