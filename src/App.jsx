
import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent'
function App() {
  const name ='Rita B';

  return (
    <>
      <div>
        <h3>Práctica de Componentes</h3>
        <MyComponent  
          name = {name}
          lastName= 'Oliveros'
          />

          <hr />
          <h4>Segundo Componente</h4>
          < SecondComponent />
        
      </div>
    </>
  )
}

export default App
