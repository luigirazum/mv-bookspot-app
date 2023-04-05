import { v4 as uuidv4 } from 'uuid';

const books = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

export default books;
