import { Routes, Route } from 'react-router-dom';
import BookSpot from './routes/BookSpot';
import Home from './routes/Home';
import Categories from './routes/Categories';
import Profile from './routes/Profile';
import NotFound from './routes/NotFound';
import './assets/styles/App.css';

const App = () => (
  <div className="App">
    <Routes>
      <Route element={<BookSpot />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
);

export default App;
