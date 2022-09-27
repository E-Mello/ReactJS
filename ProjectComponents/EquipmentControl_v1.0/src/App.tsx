import { useState } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './pages/Layout';
import { Dashboard } from './pages/Dashboard';
import { RegisterDevice } from './pages/RegisterDevice';
import { DeviceControl } from './pages/DeviceControl';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { NoPage } from './pages/NoPage';

import '../global.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="RegisterDevice" element={<RegisterDevice />} />
            <Route path="DeviceControl" element={<DeviceControl />} />
            <Route path="Reports" element={<Reports />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
