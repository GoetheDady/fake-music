import {
  BrowserRouter,
} from 'react-router-dom';
import { Background, BackgroundTitle } from './style';
import Center from './components/center';

function App() {
  return (
    <BrowserRouter>
      <Background>
        <BackgroundTitle>
          Music
        </BackgroundTitle>
        <Center />
      </Background>
    </BrowserRouter>
  );
}

export default App;
