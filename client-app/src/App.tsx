import React from 'react';
import { Header, Icon } from 'semantic-ui-react'
import './App.css';
import axios from "axios"
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div>
          <Header as='h2'>
              <Icon name='users' />
              <Header.Content>Reactivities</Header.Content>
          </Header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
    </div>
  );
}

export default App;
