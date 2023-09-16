import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
