import {Navbar} from './components/Navbar'
import {Card} from './components/Card'
import './App.css'
import data from './data'

export function App() {
  const elements = data.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })
  return (
    <div className="container">
      <Navbar />
      {elements}
    </div>
  );
}


