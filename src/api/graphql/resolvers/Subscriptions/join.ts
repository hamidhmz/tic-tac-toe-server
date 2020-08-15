import { gameType } from '../../store/Game';
import { userType } from '../../store/User';

function join() {
  return {
    subscribe(
      parent,
      { userId },
      {
        pubsub,
        game,
        user,
      }: {
        pubsub: any;
        game: { games: gameType[] };
        user: { uuidPack: any; users: userType[] };
      }
    ) {
      const { games } = game;
      if (games.length) {
        const yourGameIndex = games.findIndex((eachGame) => {
          return eachGame.status === 'OPEN';
        });
        games[yourGameIndex].status = 'CLOSED';
        games[yourGameIndex].secondPlayer = userId;
        return pubsub.publish('join' + games[yourGameIndex].id, {
          // join can be any name
          join: games[yourGameIndex],
        });
      } else {
        const yourGame: gameType = {
          id: games[games.length - 1].id + 1,
          firstPlayer: userId,
          secondPlayer: null,
          firstPlayerSign: 'X',
          secondPlayerSign: 'O',
          turn: 'X',
          board: [
            ['EMPTY', 'EMPTY', 'EMPTY'],
            ['EMPTY', 'EMPTY', 'EMPTY'],
            ['EMPTY', 'EMPTY', 'EMPTY'],
          ],
          status: 'OPEN',
        };
        games.push(yourGame);
        return pubsub.asyncIterator('join' + yourGame.id);
      }
    },
  };
}

export default join;
