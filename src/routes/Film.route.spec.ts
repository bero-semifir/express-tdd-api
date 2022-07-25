// Librairie de Test HTTP, il fait les requêtes
import supertest from 'supertest';

// Supertest a besoin de l'app pour lancer les requêtes
import app from '../app';

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
});
