import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Answer from './component/Answer/Answer';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Shop></Shop>
      <Answer></Answer>
    </div>
  );
}

export default App;
