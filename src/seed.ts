import getArticlesFromApi from './spaceFlightNews';
import server from './server';

const seed = async () => {
  server.startServer();
  await getArticlesFromApi();
}

seed();

export default seed;
