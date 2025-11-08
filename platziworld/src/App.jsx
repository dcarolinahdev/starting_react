import './App.css'

function App() {
  const items = ["React", "Javascript", "Vite"];

  return (
    <section>
      <h1>Hi react!</h1>
      <p>I'm learning about...</p>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default App
