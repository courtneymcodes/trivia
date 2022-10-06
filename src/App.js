import './App.css';
import AnswerButton from './components/AnswerButton';
import GameStats from './components/GameStats';
import GetQuestion from './components/GetQuestion';
import ScoreDisplay from './components/ScoreDisplay';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <ScoreDisplay />
      <GetQuestion />
      <GameStats />
      <AnswerButton />
    </div>
  );
}

export default App;
