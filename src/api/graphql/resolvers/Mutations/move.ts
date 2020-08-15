import { gameType } from '../../store/Game';
import { userType } from '../../store/User';

function move(
  parent,
  {
    gameId,
    userToken,
    cellIndex,
  }: { gameId: string; userToken: string; cellIndex: number },
  {
    game,
    user,
    pubsub,
  }: { game: { games: gameType[] }; user: { users: userType[] }; pubsub: any }
) {
  return game.games;
}

export default move;
