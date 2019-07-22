import React, {Component} from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';


function App() {
  return (
      <AppLayout>
          <AppProvider>
          <AppBar/>
      <Settings/>
          </AppProvider>
      </AppLayout>
      );
}

export default App;
