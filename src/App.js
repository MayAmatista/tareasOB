import './App.css';
import { ContactComponent } from './components/contact';
import { Contact } from './components/contact'

function App() {
  const defaultContact = new Contact("Mayra", "Mosqueira", "mosqueira.mayra@gmail.com", false)
  return (
    <div className="App">
      <header className="App-header">
        <h1> 
        <ContactComponent contact = { defaultContact }></ContactComponent>
        </h1>
      </header>
    </div>
  );
}

export default App;
