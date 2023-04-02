import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const BookSpot = () => (
  <>
    <Header />
    <main className="wrapper">
      <Outlet />
    </main>
  </>
);

export default BookSpot;
