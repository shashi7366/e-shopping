import {render,screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import App from '../App';
import {Provider} from 'react-redux';
import store from '../redux/store'



const MockContainer=()=>{
    return <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
       
    </BrowserRouter>
}

describe("testing basic structure of App.js",()=>{
    test("testing for presence of navbar and footer",()=>{
        render(<MockContainer/>);
        var icon=screen.getAllByText(/e-Shopping/i);
        expect(icon.length).toBe(2);
    });

    test("testing for presence of home",async ()=>{
        render(<MockContainer/>);
        var home=screen.findByTestId('homeDiv');
         console.log(home);
    });
})