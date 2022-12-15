import {
  FaChessKing,
  FaChessQueen,
  FaChessRook,
  FaChessBishop,
  FaChessKnight,
  FaChessPawn,
} from 'react-icons/fa';

import { PieceType } from './types';

const pieceTypeMap = {
  [PieceType.King]: <FaChessKing />,
  [PieceType.Queen]: <FaChessQueen />,
  [PieceType.Rook]: <FaChessRook />,
  [PieceType.Bishop]: <FaChessBishop />,
  [PieceType.Knight]: <FaChessKnight />,
  [PieceType.Pawn]: <FaChessPawn />,
};

export default pieceTypeMap;
