import Navbar from './components/Navbar'
import Cards from './components/Cards'
import './App.css'
import data from './data'

function App() {
  const elements = data.map(item => {
    return <Cards
      key={item.id}
      item={item}
    />
  })
  console.log(data)
  return (
    <div className="container">
      <Navbar />
      {elements}
    </div>
  );
}

export default App;
