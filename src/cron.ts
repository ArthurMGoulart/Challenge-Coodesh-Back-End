import cron from "node-cron";
import shell from "shelljs";

const setCron = () => {
  cron.schedule('0 9 * * *', () => {
    shell.exec('npm run seed');
  });
}

export default setCron;
