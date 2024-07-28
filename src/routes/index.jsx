import { Route, Routes } from 'react-router';

import Home from '../pages/home';
import Search from '../pages/search';

import Layout from './layout';

const AppRoutes = () =>
  <Routes>
    <Route element={<Layout />} path="/">
      <Route element={<Home />} path="/" />
      <Route element={<Search />} path="/search/:q" />
    </Route>
  </Routes>;

export default AppRoutes;
