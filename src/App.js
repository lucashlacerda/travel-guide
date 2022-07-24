
import data from './data';
import Travel from './components/Travel'
import Header from './components/Header'

const travels = data.map(item => <Travel {...item}/>)
function App() {

  return (
    <div className="app">
      <Header />
      {travels}
 
    </div>
  );
}

export default App;
