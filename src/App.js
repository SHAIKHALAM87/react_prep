//import logo from './logo.svg';
import './App.css';
//import HOC from './component/HOC';
//import ComponentMount from './component/ComponentMount';
import ComponentMountFunctional from './component/ComponentMountFunctional';
import { CallBackFunction } from './component/FunctionCallback';
import UseStateHook from './component/hooks/usestatehooks';
import ParentComponent from './component/LiftingStateParent';
import Reactmemo from './component/Reactmemo';
//import Fetch2 from './component/Fetch2';

function App() {
  console.log(this);
  return (
    <div className="App">

        {
        /*<Fetch2/>
        <ComponentMountFunctional/>
        <UseStateHook/>
        <>
          <Reactmemo title="Heat" date="December 15, 1995"></Reactmemo>
          <Reactmemo title="Heat" date="December 15, 1995"></Reactmemo>
        </>
        <ComponentMountFunctional/>
        <CallBackFunction />
        <UseStateHook />*/
        <ParentComponent/>
        }
      
    </div>
  );
}

//App = HOC(App);

export default App;
