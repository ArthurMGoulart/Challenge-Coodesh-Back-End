import * as http from 'http';
import express, { Router } from 'express';
import connectToDatabase from './connection';

class App {
  public app: express.Application;
  public server: http.Server;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.server = http.createServer();
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.server = this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
    this.app.get('/', (req, res) => res.status(200).send('Back-end Challenge 2021 🏅 - Space Flight News'));
  }

  public stopServer(): void {
    this.server.close();
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
