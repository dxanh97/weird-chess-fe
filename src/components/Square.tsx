import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

import { ActivePiece, Color, Rank, File, Position } from '../utils/types';
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
  user-select: none;
`;

interface Props {
  rank: Rank;
  file: File;
  color: Color;
  piece?: ActivePiece;
  onPieceDrop: (fromPosition: Position, toPosition: Position) => void;
}

const Square: React.FC<Props> = ({ rank, file, color, piece, onPieceDrop }) => {
  const [, dropRef] = useDrop(() => ({
    accept: 'piece',
    drop: () => ({ position: [file, rank] }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <Wrapper ref={dropRef} squareColor={color}>
      {piece && <Piece {...piece} onDragEnd={onPieceDrop} />}
    </Wrapper>
  );
};

export default Square;
