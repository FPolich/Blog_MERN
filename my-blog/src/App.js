import './App.css';
import {BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Article from './pages/Article';
import ArticleList from './pages/ArticlesList';
import About from './pages/About';
import NotFound from './pages/NotFound';

//Components 
import NavBar from "./components/NavBar";


function App() {
  return (
        <BrowserRouter>
        <NavBar />
        <div className="max-w-screen-md mx-auto pt-20">
          <Switch>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles-list" element={<ArticleList />} />
              <Route path="/article/:name" element={<Article />} />
              <Route component={NotFound}/>
            </Routes>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
