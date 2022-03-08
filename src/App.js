import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Background, BackgroundTitle } from './style';
import Center from './components/center';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Background>
          <BackgroundTitle>
            Music
          </BackgroundTitle>
          <Center />
        </Background>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
