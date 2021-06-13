import React, { useState } from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <div className="app__body">

            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
        )}

    </div>
  );
}

export default App;
//hosting at https://whatsapp-clone-4298a.web.app
//firebase deploy --only hosting
//firebase init        
//firebase init  && npm run build && firebase deploy --only hosting  **** to deploy
//npm install -g serve
//serve -s build final test
//firebase init 
//firebase deploy --only hosting
//firebase deploy --only functions