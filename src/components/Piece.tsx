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

import { ActivePiece, Color, Position } from '../utils/types';
import { PieceType } from '../utils/types';

const pieceTypeMap = {
  [PieceType.King]: FaChessKing,
  [PieceType.Queen]: FaChessQueen,
  [PieceType.Rook]: FaChessRook,
  [PieceType.Bishop]: FaChessBishop,
  [PieceType.Knight]: FaChessKnight,
  [PieceType.Pawn]: FaChessPawn,
};

const Wrapper = styled.div<{
  pieceColor: Color;
  opacity: number;
  isDragging: boolean;
}>`
  display: flex;
  opacity: ${(props) => props.opacity};
  background: none;
  transform: translate(0, 0);
`;

interface Props extends ActivePiece {
  onDragEnd: (fromPosition: Position, toPosition: Position) => void;
}

const Piece: React.FC<Props> = ({ type, color, position, onDragEnd }) => {
  const [{ opacity, isDragging }, dragRef] = useDrag(
    () => ({
      type: 'piece',
      item: { position, type, color },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.3 : 1,
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult() as any;
        const toPosition: ActivePiece['position'] = dropResult.position;
        onDragEnd(position, toPosition);
      },
    }),
    [],
  );

  const PieceType = pieceTypeMap[type];

  const pieceNode = (
    <PieceType
      fill={color === Color.Light ? 'white' : 'black'}
      style={{ height: 30, width: 30, cursor: 'grab' }}
    />
  );

  return (
    <Wrapper
      ref={dragRef}
      pieceColor={color}
      opacity={opacity}
      isDragging={isDragging}
    >
      {pieceNode}
    </Wrapper>
  );
};

export default Piece;
