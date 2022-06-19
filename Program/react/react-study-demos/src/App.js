import './App.css';

// import ColorFormUse from './components/ColorFormUse'
import StarRating from './components/StateCom/StarRating'

function App() {
  return (
    <div className="App">
      {/* <ColorFormUse></ColorFormUse> */}
      <StarRating starsSelected={2} />
    </div>
  );
}

export default App;
