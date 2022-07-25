// Librairie de Test HTTP, il fait les requêtes
import supertest from 'supertest';

// Supertest a besoin de l'app pour lancer les requêtes
import app from '../app';
import { Film } from '../types/Film.type';

const dummyFilm: Film = {
    title: 'Alladd\'2',
    actors: [
        {firstname: 'Kevin', lastname: 'Adams'}
    ],
    synopsys: '???',
    status: 'released'
}

describe('Router films', () => {
    describe('GET /films', () => {
        test('code 200 et reponse en JSON', async () => {
            // on lance la requête
            const resp = await supertest(app).get('/films');
            // on s'attend à un code HTTP 200
            expect(resp.statusCode).toBe(200);
            // on s'attend à recevoir du JSON
            expect(resp.headers['content-type']).toEqual('application/json; charset=utf-8');
        })

        test('on récupére un film', async () => {
            const resp = await supertest(app).get('/films');
            expect(resp.body[0]).toHaveProperty('title');
            expect(resp.body[0]).toHaveProperty('synopsys');
            expect(resp.body[0]).toHaveProperty('status');
            expect(resp.body[0]).toHaveProperty('actors');
        })
    })

    describe('POST /films', ()=> {
        test('code 201 et reponse en JSON', async()=>{
            // on lance la requête
            const resp = await supertest(app)
                            .post('/films')
                            .set('body', JSON.stringify(dummyFilm));
            // on s'attend à un code HTTP 201
            expect(resp.statusCode).toBe(201);
            // on s'attend à recevoir du JSON
            expect(resp.headers['content-type']).toEqual('application/json; charset=utf-8');
        })
    })

    // describe('DELETE /films/:id', ()=>{
    //     test('code 204 et reponse en JSON', async()=>{
    //         // on lance la requête
    //         const resp = await supertest(app).delete('/films/1');
    //         // on s'attend à un code HTTP 204
    //         expect(resp.statusCode).toBe(204);
    //         // on s'attend à recevoir du JSON
    //         expect(resp.headers['content-type']).toEqual('application/json; charset=utf-8');
    //     })
    // })

});
