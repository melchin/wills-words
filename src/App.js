import './App.css';

import Word from './components/Word';
//
const words = [
  'among',
  'circle',
  'decided',
  'heavy',
  'machine',
  'produce',
  'special',
  'though',
  'brought',
  'common',
  'explain',
  'island',
  'material',
  'quickly',
  'stood',
  'understand',
  'built',
  'course',
  'government',
  'language',
  'pair',
  'shown',
  'system',
  `amount`,
  `dictionary`,
  `fight`,
  `melody`,
  `quiet`,
  `speak`,
  `village`,
  `consonant`,
  `either`,
  `instead`,
  `nation`,
  `quite`,
  `surprise`,
  `within`,
  `couldn't`,
  `exactly`,
  `laughed`,
  `phrase`,
  `smiled`,
  `temperature`,
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
