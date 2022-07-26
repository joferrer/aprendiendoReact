import { getSaludo } from "../src/base-pruebas/base-pruebas/02-template-string";


describe('Test para getSaludo', () => { 

    const name = 'Jeison';

    const message = getSaludo(name);

    test('getSaludo debe retornar "Hola Jeison"', () => { 

        expect(message).toBe(`Hola ${name}`);
     });




});