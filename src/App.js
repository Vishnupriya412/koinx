import './App.css'
import About from './components/about';
import NavBar from './components/navBar';
import Performance from './components/performance';
import Team from './components/team';


function App() {
  return (
    <div>
      <NavBar />
      <Performance />
      <About/>
      <Team/>
    </div>
  );
}

export default App;
