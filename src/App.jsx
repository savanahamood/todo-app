import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ToDo from './components/todo/Todo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { SettingsProvider } from './Context/Settings/SettingsContext';
import SettingsForm from './components/SettingsForm/SettingsForm'
export default class App extends React.Component {
  render() {
    return (
      
        <SettingsProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<ToDo />} />
              <Route path="/settings" element={<SettingsForm />} />
            </Routes>
            <Footer />
          </Router>
        </SettingsProvider>

      
    );
  }
}
