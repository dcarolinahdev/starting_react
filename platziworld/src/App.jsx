import './App.css'
import Card from './components/Card';

function App() {
  const items = ["React", "Javascript", "Vite"];

  return (
    <section>
      <h1>Hi react!</h1>
      <h2>I'm learning about...</h2>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <h2>And this is a child component:</h2>
      <Card title="Title 1" description="Esta es una descripción"></Card>
    </section>
  )
}

export default App
