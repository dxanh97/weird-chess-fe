import { files, ranks } from './constants';

export enum PieceType {
  King = 'K',
  Queen = 'Q',
  Rook = 'R',
  Bishop = 'B',
  Knight = 'N',
  Pawn = '',
}

export enum Color {
  Dark = 'DARK',
  Light = 'LIGHT',
}

type File = typeof files[number];
type Rank = typeof ranks[number];

export interface ActivePiece {
  type: PieceType;
  color: Color;
  position: [File, Rank];
}
