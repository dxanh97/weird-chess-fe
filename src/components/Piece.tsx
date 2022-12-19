import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import {
  FaChessKing,
  FaChessQueen,
  FaChessRook,
  FaChessBishop,
  FaChessKnight,
  FaChessPawn,
} from 'react-icons/fa';

import { ActivePiece, Color } from '../utils/types';
import { PieceType } from '../utils/types';

const pieceTypeMap = {
  [PieceType.King]: <FaChessKing />,
  [PieceType.Queen]: <FaChessQueen />,
  [PieceType.Rook]: <FaChessRook />,
  [PieceType.Bishop]: <FaChessBishop />,
  [PieceType.Knight]: <FaChessKnight />,
  [PieceType.Pawn]: <FaChessPawn />,
};

const Wrapper = styled.div<{ pieceColor: Color; opacity: number }>`
  display: flex;
  svg {
    fill: ${(props) => (props.pieceColor === Color.Light ? 'white' : 'black')};
    height: 30px;
    width: 30px;
  }
`;

const Piece: React.FC<ActivePiece> = ({ type, color, position }) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [],
  );

  return (
    <Wrapper ref={dragRef} pieceColor={color} opacity={opacity}>
      {pieceTypeMap[type]}
    </Wrapper>
  );
};

export default Piece;
