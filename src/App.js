import './App.css';

import Word from './components/Word';
//
const words = [
  'about',
  'clean',
  'drink',
  'full',
  'hot',
  'kind',
  'much',
  'bring',
  'done',
  'fall',
  'grow',
  'if',
  'hold',
  'seven',
  'own',
  'show',
  'ten',
  'warm',
  'better',
  'cut',
  'eight',
  'small',
  'together',
  'carry',
  'draw',
  'far',
  'never',
  'long',
  'got',
  'hurt',
  'laugh',
  'myself',
  'pick',
  'six',
  'today',
  'only',
  'shall',
  'start',
  'try',
  'light',
  'keep',
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {words.map(word => <Word word={word} />)}
      </header>
    </div>
  );
}

export default App;
