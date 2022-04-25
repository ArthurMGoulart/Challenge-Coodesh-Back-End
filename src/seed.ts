import getArticlesFromApi from './spaceFlightNews';
import server from './server';
import mongoose from 'mongoose';

const seed = async () => {
  if (mongoose.connection.readyState !== 1) {
    server.startServer();
  }
  await getArticlesFromApi();
}

seed();
