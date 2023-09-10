import {Navigate, createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to='/home' replace={true} />,
            },
            {
                path: '/home',
                element: <Home />,
            },
        ],
    },
]);
