import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/base-pruebas/08-imp-exp";


describe('Set test for 08-imp-exp.js', () => {

    test('Test getHeroeById', () => {
        const id = 1;

        const heroe = getHeroeById(id);

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('Test getHeroeById para un heroe que no existe', () => {
        const id = 100;

        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();

    });

    test('Test getHeroeByOwner', () => {
        const owner = ['DC','Marvel'];

        const heroesDC = getHeroesByOwner(owner[0]);

        const heroesMarvel = getHeroesByOwner(owner[1]);
        //Pruebas con owner = DC
        expect(heroesDC.length).toBe(3);

        heroesDC.forEach((heroe)=>{expect(heroe.owner).toEqual('DC')});
        
        expect(heroesMarvel.length).toBe(2);



        

    });

});