import './App.css'
import Card from './components/Card';

function App() {
  const items = ["React", "Javascript", "Vite"];
  const cards = [
    {title: 'Card 1', description: 'Description 1'},
    {title: 'Card 2', description: 'Description 2'},
    {title: 'Card 3', description: 'Description 3'}
  ]

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
      {
        cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description}/>
        ))
      }
    </section>
  )
}

export default App
