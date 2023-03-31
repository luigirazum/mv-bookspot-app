import { Routes, Route } from 'react-router-dom';
import BookSpot from './routes/BookSpot';
import Home from './routes/Home';
import Categories from './routes/Categories';
import NotFound from './routes/NotFound';
import './assets/styles/App.css';

const App = () => (
  <main>
    <Routes>
      <Route element={<BookSpot />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </main>
);

export default App;
