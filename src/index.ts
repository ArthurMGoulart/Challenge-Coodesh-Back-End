import server from './server';

import getArticlesFromApi from './spaceFlightNews';

server.startServer();

getArticlesFromApi();
