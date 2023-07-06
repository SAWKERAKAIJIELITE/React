import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'Dave';

    const randomName = (name) => {
        return Math.random() * name.length;
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello {randomName(name)}
                </p>
            </header>
        </div>
    );
}

export default App;
