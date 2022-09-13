import React, { useState, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dataContext from './context';

const { Provider } = dataContext;
function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: 'some text',
    });

    return (
        <Provider value={data}>
            <Form mail={data.text} />
            <button
                onClick={() =>
                    setData({
                        mail: 'second@example.com',
                        text: 'another text',
                    })
                }
            >
                Click me
            </button>
        </Provider>
    );
}

export default App;
