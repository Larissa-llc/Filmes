import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas' 
function App() {
  return (
    <div>
    <BrowserRouter>
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  </div>

  );
}

export default App;
