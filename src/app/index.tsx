/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { CartPage } from './pages/CartPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - OpticsPlanet"
        defaultTitle="Checkout — OpticsPlanet"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Checkout — OpticsPlanet" />
      </Helmet>

      <Routes>
        {/* <Route path="/checkout/v2/build" element={<CartPage />} /> */}
        <Route path="*" element={<CartPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
