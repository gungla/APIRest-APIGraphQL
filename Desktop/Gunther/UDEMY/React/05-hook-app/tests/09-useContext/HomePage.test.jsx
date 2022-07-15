import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContect";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Pruebas en <HomePage/>', () => { 

    const user = {
        id: 1,
        name: 'Gunther'
    }

    test('debe de mostrar el componente si el usuario', () => { 

        render( 
            <UserContext.Provider value={{ user: null }}> 
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
        //screen.debug();

     });

     test('debe de mostrar el componente con el usuario', () => { 

        render( 
            <UserContext.Provider value={{ user }}> 
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
        //screen.debug();

     });

 });