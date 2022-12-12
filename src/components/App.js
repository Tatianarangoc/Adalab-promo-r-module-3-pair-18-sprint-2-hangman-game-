// Fichero src/components/App.js
import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import getWords from '../../src/services/api';
import Header from './Hader';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';
import Loading from './Loading';
function App() {
  //--------------------- VARIABLES ESTADO---------------------
  // Varible estado para incrementar el número de fallos
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  // Variable estado para guardar el carácter introducido en el input
  const [lastLetter, setLastLetter] = useState('');
  // Variable estado para almacenar la palabra que se deberá adivinar.
  const [word, setWord] = useState('katakroker');
  // Variable estado para para almacenar y pintar las letras que introduce la jugadora.
  const [userLetters, setUserLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // --------------------Llamada a al Api--------------------------

  useEffect(() => {
    getWords().then((data) => {
      setWord(data.word);
      console.log(data.word);
    });
  }, []);
  //-----------------------------FUCIONES-------------------------------
  // const handleClick = () => {
  //   setNumber(numbeOfrErrors + 1);
  // };
  const handleClickLetter = (event) => {
    const wordLetters = word.split('');
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/;
    if (re.test(event.target.value) || event.target.value === '') {
      setLastLetter(event.target.value);
      if (event.target.value !== '') {
        setUserLetters([...userLetters, event.target.value]);
        if (!wordLetters.includes(event.target.value)) {
          setNumberOfErrors(numberOfErrors + 1);
        }
      }
    }
  };

  const handleChange = (value) => {
    setLastLetter('');
    setUserLetters([]);
    setWord(value);
  };
  // -------------------------Función para pintar las letras---------------------------
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((eachLetter, index) => {
      if (userLetters.includes(eachLetter)) {
        return (
          <li key={index} Name="letter">
            {eachLetter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };
  // ------------Con esta función estamos pintando las letras falladas--------------------
  const renderErrorLetters = () => {
    const wordLetters = word.split('');
    return userLetters.map((eachLetter, index) => {
      if (wordLetters.includes(eachLetter)) {
        return '';
      } else {
        return (
          <li key={index} className="letter">
            {eachLetter}
          </li>
        );
      }
    });
  };
  return (
    <div className="page">
      <header>
        <Header />
      </header>
      <main className="main">
        <Loading isLoading={isLoading} />

        <Routes>
          <Route
            path="/"
            element={
              <section>
                <SolutionLetters
                  renderSolutionLetters={renderSolutionLetters}
                  word={word}
                />
                <ErrorLetters
                  renderErrorLetters={renderErrorLetters}
                  word={word}
                />
                <Form
                  handleClickLetter={handleClickLetter}
                  lastLetter={lastLetter}
                />
              </section>
            }
          />
          <Route path="/instructions" element={<Instructions />}></Route>
          <Route path="/options" element={<Options />} word={word}></Route>
        </Routes>

        <section>
          <Dummy numbeOfrErrors={numberOfErrors} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
