import server from './server';
import setCron from './cron';

server.startServer();

setCron();
