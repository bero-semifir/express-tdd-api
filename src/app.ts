import express from 'express';

// import des routes
import FilmRouter from './routes/Film.route';
import ActorRouter from './routes/Actor.route';

// création d'un serveur ExpressJS
const app = express();

// ⚠ important pour pouvoir parser les JSON
app.use(express.json());

// utilisation des routes

app.use('/films', FilmRouter);
app.use('/actors', ActorRouter);

export default app;
