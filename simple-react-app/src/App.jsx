import { Counter } from './components/Counter';
import { CounterWithEffect } from './components/CounterWithEffect';
import { ToggleButton } from './components/ToggleButton';
import { NameForm } from './components/NameForm';
import './App.css';

function App() {

  return (
    <>
      <h2>useState</h2>
      <Counter />
      <ToggleButton />
      <NameForm />
      <h2>useEffect</h2>
      <CounterWithEffect />
    </>
  )
}

export default App
