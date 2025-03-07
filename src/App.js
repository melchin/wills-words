import './App.css';

import Word from './components/Word';
//
const words = [
  'above',
  'kitten',
  'such',
  'cap',
  'knew',
  'kind',
  'loud',
  'queen',
  'teach',
  'busy',
  'bad',
  'pot',
  'button',
  'nine',
  'strong',
  'cross',
  'sand',
  'cut',
  'march',
  'press',
  'twelve',
  'yard',
  'dead',
  'bake',
  'enough',
  'sea',
  'soft',
  'camp',
  'save',
  'lake',
  'outside',
  'page',
  'wake',
  'world',
  'family',
  'gift'
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
