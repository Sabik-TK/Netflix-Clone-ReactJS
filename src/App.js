import React from 'react'
import './App.css';
import { action,originals,comedy, horror} from './urls';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navbar/NavBar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix originals' url={originals}   />
      <RowPost title='Action' isSmall  url={action} />
      <RowPost title='Comedy' isSmall  url={comedy} />
      <RowPost title='Horror' isSmall  url={horror} />



    </div>
  );
}

export default App;
