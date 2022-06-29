import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import ArticleList from './pages/ArticlesList';
import About from './pages/About';

function App() {
  return (
        <BrowserRouter>
        <div className="max-w-screen-md mx-auto pt-20">
          <h1>Hello, React Router!</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles-list" element={<ArticleList />} />
            <Route path="/article" element={<Article />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
