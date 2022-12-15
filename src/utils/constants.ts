import { Color, ActivePiece, PieceType } from './types';

export const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;
export const ranks = [1, 2, 3, 4, 5, 6, 7, 8] as const;

const { Light, Dark } = Color;

export const initialPieces: ActivePiece[] = [
  { position: ['a', 1], color: Light, type: PieceType.Rook },
  { position: ['b', 1], color: Light, type: PieceType.Knight },
  { position: ['c', 1], color: Light, type: PieceType.Bishop },
  { position: ['d', 1], color: Light, type: PieceType.Queen },
  { position: ['e', 1], color: Light, type: PieceType.King },
  { position: ['f', 1], color: Light, type: PieceType.Bishop },
  { position: ['g', 1], color: Light, type: PieceType.Knight },
  { position: ['h', 1], color: Light, type: PieceType.Rook },
  { position: ['a', 2], color: Light, type: PieceType.Pawn },
  { position: ['b', 2], color: Light, type: PieceType.Pawn },
  { position: ['c', 2], color: Light, type: PieceType.Pawn },
  { position: ['d', 2], color: Light, type: PieceType.Pawn },
  { position: ['e', 2], color: Light, type: PieceType.Pawn },
  { position: ['f', 2], color: Light, type: PieceType.Pawn },
  { position: ['g', 2], color: Light, type: PieceType.Pawn },
  { position: ['h', 2], color: Light, type: PieceType.Pawn },
  { position: ['a', 8], color: Dark, type: PieceType.Rook },
  { position: ['b', 8], color: Dark, type: PieceType.Knight },
  { position: ['c', 8], color: Dark, type: PieceType.Bishop },
  { position: ['d', 8], color: Dark, type: PieceType.Queen },
  { position: ['e', 8], color: Dark, type: PieceType.King },
  { position: ['f', 8], color: Dark, type: PieceType.Bishop },
  { position: ['g', 8], color: Dark, type: PieceType.Knight },
  { position: ['h', 8], color: Dark, type: PieceType.Rook },
  { position: ['a', 7], color: Dark, type: PieceType.Pawn },
  { position: ['b', 7], color: Dark, type: PieceType.Pawn },
  { position: ['c', 7], color: Dark, type: PieceType.Pawn },
  { position: ['d', 7], color: Dark, type: PieceType.Pawn },
  { position: ['e', 7], color: Dark, type: PieceType.Pawn },
  { position: ['f', 7], color: Dark, type: PieceType.Pawn },
  { position: ['g', 7], color: Dark, type: PieceType.Pawn },
  { position: ['h', 7], color: Dark, type: PieceType.Pawn },
];
