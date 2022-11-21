import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Jobs from './pages/Jobs';
import Account from './pages/Account';
import React from 'react';
import Contact from './pages/Contact';

// import './App.css'

function App() {
    return (
        <div className='App'>
            <Router>
                <nav>
                    <Link to='/'>Home</Link>{"    "}
                    <Link to='/about'>About</Link>{"    "}
                    <Link to='/contact'>Contact</Link>{"    "}
                    <Link to='/jobs'>Jobs</Link>{"    "}
                    {/* <Link to='/account'>Acc</Link>{"    "} */}
                </nav>
                <Routes>

                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/jobs' element={<Jobs />}></Route>

                    <Route path='/account' element={<Account />}></Route>

                </Routes>
                {/* <footer>
                    <div>Footer section</div>
                    <Link to='/'>Home</Link>{"    "}
                    <Link to='/about'>About</Link>{"    "}
                    <Link to='/profile'>Profile</Link>{"    "}
                </footer> */}
            </Router>

        </div>
    )
}

export default App;