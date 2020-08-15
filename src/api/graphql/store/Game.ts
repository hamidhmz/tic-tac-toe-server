type Cell = 'EMPTY' | 'X' | 'O';
type signType = 'X' | 'O';
type Status = 'OPEN' | 'CLOSED' | 'EXITED';

type gameType = {
  id: number;
  firstPlayer: string | null;
  secondPlayer: string | null;
  firstPlayerSign: signType;
  secondPlayerSign: signType;
  turn: signType;
  board: [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];
  status: Status;
};

const games: gameType[] = [];

export { games, gameType };
