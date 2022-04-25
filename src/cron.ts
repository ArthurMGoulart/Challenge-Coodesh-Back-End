import cron from "node-cron";
import getArticlesFromApi from "./spaceFlightNews";

const setCron = () => {
  cron.schedule('0 9 * * *', getArticlesFromApi, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
  });
}

export default setCron;
