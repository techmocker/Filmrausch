import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startseite from "./Pages/Startseite/Startseite";
import Filme from "./Pages/Filme/Filme";
import Serien from "./Pages/Serien/Serien";
import Suche from "./Pages/Suche/Suche";
import Filmseite from "./Pages/Filmseite/Filmseite";
import Serienseite from "./Pages/Serienseite/Serienseite";
import Favoriten from "./Pages/Favoriten/Favoriten";
import Error from "./Pages/Error/Error";
import Impressum from "./Pages/Impressum/Impressum";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import Header from './components/Header/Header';
import Pageloader from './components/Pageloader/Pageloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulieren einer Ladezeit bla bla
    setTimeout(() => {
      setIsLoading(false);
    }, 4800); // Zum Beispiel 2000ms = 2 Sekunden
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <Pageloader />
        ) : (
          <>
            <Header />
            <Navbar2 />
            <Routes>
              <Route path="/filmrausch/" element={<Startseite />} exact />
              <Route path="/filmrausch/filme" element={<Filme />} />
              <Route path="/filmrausch/serien" element={<Serien />} />
              <Route path="/filmrausch/suche" element={<Suche />} />
              <Route path="/filmrausch/filmseite/:id" element={<Filmseite />} />
              <Route path="/filmrausch/serienseite/:id" element={<Serienseite />} />
              <Route path="/filmrausch/favoriten/:userId" element={<Favoriten />} />
              <Route path="/filmrausch/impressum" element={<Impressum />} />
              <Route path="/filmrausch/*" element={<Error />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
