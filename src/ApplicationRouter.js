import { MovieDetail } from './views/MovieDetail/MovieDetail';
import { Movies } from './views/Movies/Movies';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      {
        path: '/movie/:movieId',
        element: <MovieDetail />,
      },
    ],
  },
]);
export const ApplicationRoutes = () => <RouterProvider router={router} />;
