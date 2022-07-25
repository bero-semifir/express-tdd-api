// Librairie de Test HTTP, il fait les requêtes
import supertest from 'supertest';

// Supertest a besoin de l'app pour lancer les requêtes
import app from '../app';

describe('Router films', () => {
    test('GET /films', async() => {
        // on lance la requête
        const resp = await supertest(app).get('/films');
        // on s'attend à un code HTTP 200
        expect(resp.statusCode).toBe(200);
    })
});
