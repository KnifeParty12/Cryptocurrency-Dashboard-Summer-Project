import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard/index';


function App() {
  return (
      <AppLayout>
          <AppProvider>
          <AppBar/>
          <Content>
      <Settings />
      <Dashboard />
          </Content>
          </AppProvider>
      </AppLayout>
      );
}

export default App;
