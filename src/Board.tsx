import React, { useMemo, useState } from 'react';
import { keyBy } from 'lodash';
import styled from 'styled-components';

import { Color } from './utils/types';
import { initialPieces } from './utils/constants';
import { getRanksOrder, getFilesOrder } from './utils/utils';

import Piece from './Piece';

const { Light, Dark } = Color;

const Ruler = styled.div<{ type: 'ranks' | 'files' }>`
  display: flex;
  flex-direction: ${(props) => (props.type === 'ranks' ? 'column' : 'row')};
  padding: 0 ${(props) => (props.type === 'files' ? 50 : 0)}px;
  & span {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Square = styled.div<{
  squareColor: Color;
}>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.squareColor === Light ? '#db9202' : '#4c9955'};
  color: white;
  cursor: pointer;
  user-select: none;
`;

const Board: React.FC = () => {
  const [playerSide] = useState<Color>(Light);
  const [pieces] = useState(initialPieces);

  const activePieceMap = useMemo(
    () => keyBy(pieces, (p) => p.position.join('')),
    [pieces],
  );

  const ranks = useMemo(() => getRanksOrder(playerSide), [playerSide]);
  const files = useMemo(() => getFilesOrder(playerSide), [playerSide]);

  const fileRuler = useMemo(
    () => (
      <Ruler type="files">
        {files.map((file) => (
          <span key={file}>{file}</span>
        ))}
      </Ruler>
    ),
    [files],
  );

  const rankRuler = useMemo(
    () => (
      <Ruler type="ranks">
        {ranks.map((rank) => (
          <span key={rank}>{rank}</span>
        ))}
      </Ruler>
    ),
    [ranks],
  );

  return (
    <div>
      {fileRuler}
      <FlexRow>
        {rankRuler}
        <div>
          {ranks.map((rank, rankIndex) => (
            <FlexRow key={rank} className="rank">
              {files.map((file, fileIndex) => {
                const piece = activePieceMap[`${file}${rank}`];
                return (
                  <Square
                    key={file}
                    squareColor={
                      (rankIndex + fileIndex) % 2 === 0 ? Light : Dark
                    }
                  >
                    {piece && <Piece {...piece} />}
                  </Square>
                );
              })}
            </FlexRow>
          ))}
        </div>
        {rankRuler}
      </FlexRow>
      {fileRuler}
    </div>
  );
};

export default Board;
