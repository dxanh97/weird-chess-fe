import React, { useMemo, useState } from 'react';
import { Dictionary, keyBy } from 'lodash';
import styled from 'styled-components';

import { ActivePiece, Color, Position } from '../utils/types';
import { initialPieces } from '../utils/constants';
import { getRanksOrder, getFilesOrder } from '../utils/helpers';

import Square from './Square';

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

const Board: React.FC = () => {
  const [playerSide] = useState<Color>(Light);
  const [activePieces, setActivePieces] = useState(initialPieces);

  const activePieceMap = useMemo(
    () => keyBy(activePieces, (p) => p.position.join('')),
    [activePieces],
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

  const handleOnPieceDrop = (fromPosition: Position, toPosition: Position) => {
    console.log(fromPosition, toPosition);
    const piece = activePieceMap[fromPosition.join('')];
    const tmp: Dictionary<ActivePiece> = {
      ...activePieceMap,
      [toPosition.join('')]: {
        ...piece,
        position: toPosition,
      },
    };
    delete tmp[fromPosition.join('')];
    setActivePieces(Object.values(tmp));
  };

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
                    file={file}
                    rank={rank}
                    color={(fileIndex + rankIndex) % 2 === 0 ? Light : Dark}
                    piece={piece}
                    onPieceDrop={handleOnPieceDrop}
                  />
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
