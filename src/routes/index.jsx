import { Route, Routes } from 'react-router';

import Home from '../pages/home';

const AppRoutes = () =>
  <Routes>
    <Route element={<Home />} path="/" />
  </Routes>;

export default AppRoutes;
