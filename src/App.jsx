import React from 'react';

import ToDo from './components/todo/Todo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { SettingsProvider } from './Context/Settings/SettingsContext';
export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingsProvider>
          <Header />
          <ToDo />
          <Footer />
        </SettingsProvider>


      </>
    );
  }
}
