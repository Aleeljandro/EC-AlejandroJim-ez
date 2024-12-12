import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import GuildMemberManagement from './components/GuildMemberManagement/GuildMemberManagement'
import PartyFinder from './components/PartyFinder/PartyFinder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<GuildMemberManagement />} />
        <Route path="/GuildMemberManagement" element={<GuildMemberManagement />} />
        <Route path="/PartyFinder" element={<PartyFinder />} />
      </Routes>
    </Router>
  </React.StrictMode>
);