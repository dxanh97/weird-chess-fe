import { files, ranks } from './constants';
import { Color } from './types';

export const getRanksOrder = (playerSide: Color) => {
  const tmp = [...ranks];
  if (playerSide === Color.Light) {
    tmp.reverse();
  }
  return tmp;
};

export const getFilesOrder = (playerSide: Color) => {
  const tmp = [...files];
  if (playerSide === Color.Dark) {
    tmp.reverse();
  }
  return tmp;
};
