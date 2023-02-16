import Container from 'react-bootstrap/Container';

import Header from '../header/Header';
import InfoBlocks from '../infoBlocks/InfoBlocks';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './App.scss';

const App = () => {

  return <Container>
            <Header />
            <ErrorBoundary>
                <InfoBlocks />
            </ErrorBoundary>
        </Container>
}

export default App;
