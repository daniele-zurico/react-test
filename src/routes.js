import React from 'react';
import Home from './routes/Home/Home';
import Expenses from './routes/Expenses/Expenses';
import Tags from './routes/Tags/Tags';
export default [
  {
    path: '/home',
    main: () => <Home />,
  },
  {
    path: '/expenses',
    main: () => <Expenses />,
  },
  {
    path: '/tags',
    main: () => <Tags />,
  },
];