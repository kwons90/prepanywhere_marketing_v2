import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/layout';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/not-found';
import PrepBoxAI from './pages/prepbox-ai'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/prepbox-ai', element: <PrepBoxAI /> },
        ],
    },
    { path: '*', element: <NotFound /> },
]);

function App() {
    return <RouterProvider router={router}>App</RouterProvider>;
}

export default App;
