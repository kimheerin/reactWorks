//부모 컴포넌트
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <h1>리엑트 시작하기</h1>
      <MyComponent name={"tomorrow"} age={10}/>
      <img src={logo} className="App-logo"></img>
    </div>
  );
}

export default App;
