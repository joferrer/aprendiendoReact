import {App} from '../src/App';
import {CounterApp} from '../src/CounterApp';
import {render, screen} from '@testing-library/react';


describe('Test para el contador', ()=>{

    const value = 100;

    test('Hacer match con el snapshot',()=>{

        const {container}=render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();

    });


    test('Reset funcionando correctamente' , ()=>{

        render(<CounterApp value={value}/>);
        
        expect(screen.getByText(value));
        expect(screen.getByRole('heading',{ level: 2 } ).innerHTML).toEqual('100');

    });


});