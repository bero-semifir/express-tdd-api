import { Request, Response, Router } from "express";
import { Film } from "../types/Film.type";

const FilmRouter = Router();

const films: Film[] = [
    {
        title: 'Interstellar',
        actors: [
            { firstname: 'Matthew', lastname: 'McConaughey'},
        ],
        releaseDate: new Date('2014-11-05'),
        status: "released",
        synopsys: "In 2067, crop blights and dust storms threaten humanity's survival. Cooper, a widowed engineer and former NASA pilot turned farmer, lives with his father-in-law, Donald, teen son, Tom, and 10-year-old daughter, Murph. After a dust storm, patterns inexplicably appear on Murph's dust-covered bedroom floor. Murph believes a ghost created them, but Cooper deduces the patterns were made by gravity variations and represent geographic coordinates in binary code. Cooper follows the coordinates to a secret NASA facility headed by Professor John Brand, whom Cooper knows."
    }
];

// _ indique qu'on aurait pu mettre un paramètre mais on ne s'en serait pas servit (ici req)
FilmRouter.get('/', (_: Request, res: Response)=> {
    res.json(films);
});

export default FilmRouter;
