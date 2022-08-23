import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// page & layout imports
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import Category from './pages/Category'
import Createpage from './pages/Createpage'
import SiteHeader from "./components/SiteHeader"
import Edit from './pages/Edit';



function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/create" element={<Createpage />} /> 
          <Route path="/restaurents/:id" element={<ReviewDetails />} />
          <Route path="/Edit/:id" element={<Edit />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App  