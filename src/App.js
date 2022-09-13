import React, { useState, createContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const dataContext = createContext({
    mail: 'name@example.com',
    text: 'some text',
});

const { Provider, Consumer } = dataContext;

const Form = (props) => {
    const secondFieldChange = () => {};
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-3"
                    >
                        Email address
                    </label>
                    <InputComponent />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                    >
                        Example textarea
                    </label>
                    <textarea
                        onChange={secondFieldChange}
                        value={props.text}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </form>
        </Container>
    );
};

class InputComponent extends React.Component {
    firstFieldChange = () => {};
    static contextType = dataContext;
    render() {
        return (
            <input
                onChange={this.firstFieldChange}
                value={this.contextType.mail}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
            />
        );
    }
}

function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: 'some text',
    });

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <Button
                variant="primary"
                onClick={() =>
                    setData({
                        mail: 'second@example.com',
                        text: 'another text',
                    })
                }
            >
                Click me
            </Button>
        </Provider>
    );
}

export default App;
