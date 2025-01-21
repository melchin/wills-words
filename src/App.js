import './App.css';

import Word from './components/Word';

const words = [
  'always',
  'before',
  'call',
  'fast',
  'gave',
  'made',
  'pull',
  'very',
  'wish',
  'your',
  'because',
  'both',
  'does',
  'five',
  'green',
  'would',
  'sit',
  'these',
  'use',
  'why',
  'write',
  'around',
  'best',
  'off',
  'right',
  'tell',
  'upon',
  'wash',
  'work',
  'been',
  'buy',
  'cold',
  'first',
  'goes',
  'many',
  'read',
  'sleep',
  'those',
  "don't",
  "found",
  "its",
  "or",
  "sing", 
  "their",
  "us",
  "which"
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
