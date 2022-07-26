import {App} from '../src/App';

import {render} from '@testing-library/react';
/** 
describe('Pruebas en <FirstApp />', ()=>{
    test('debe de hacer match con el snapshop', () =>{
       
        const {container} =  render(<App/>);

        expect(container).toMatchSnapshot();


    });
}); **/

describe('Suit test FirstApp',()=>{

    test('Debe mostrar el titulo en el h1',()=>{
        const title = 'Hola mundo!!!';

        const {container,getByText} = render(<App/>);
        expect(getByText(title)).toBeTruthy();

        //Es mejor no hacer pruebas tan especificas. 
        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain(title);
    });

    

});