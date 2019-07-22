import React, {Component} from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';

function App() {
  return (
      <AppLayout>
      <WelcomeMessage/>
      </AppLayout>
      );
}

export default App;
