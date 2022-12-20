import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AddMember from './pages/AddMember';
import ListMember from './pages/ListMember';
import SingleMember from './pages/SingleMember';


function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <Link to ="/">Home🏠</Link>
            <Link to ="/member/all">list  Members 🥳</Link>
            <Link to ="/member/add">Add Member 😇</Link>
          </ul>
        </nav>
     
        <Routes>
        <Route path= "/" element={ <h1>Home page 🗼</h1>} />
        <Route path= "/member/all" element={<ListMember />} />
        <Route path= "/member/add" element={<AddMember />} />
        <Route path= "/member/:id" element={<SingleMember />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
