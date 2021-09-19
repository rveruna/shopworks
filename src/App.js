import React from 'react';
import { UserDetails } from './UserDetails';
import config from './config.json';
import './App.css';

function App() {
  return (
    <header className='header'>
      <UserDetails configData={config.questions} />
    </header>
  );
}

export default App;
