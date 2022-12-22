import Container from 'react-bootstrap/Button';

import Header from '../header/Header';
import InfoBlocks from '../infoBlocks/InfoBlocks';
import Msg from '../msg/Msg';

import './App.scss';

function App() {

  return <Container>
            <Header />
            <InfoBlocks />
            <Msg />
        </Container>
     
  
}

export default App;
