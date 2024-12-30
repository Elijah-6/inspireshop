import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {Route, RouterProvider, createRoutesFromElements} from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './index.css'


// Create routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />
));

// Render the app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);