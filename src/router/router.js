import { Navigate } from 'react-router-dom';
import { PATHS } from './pathes';
import { Typography } from '../components/Typography';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import GamesPage from '../pages/GamesPage';

const routes = [
  {
    path: PATHS.HOME,
    element: <Typography variant={'h1'}>Home</Typography>,
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATHS.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: PATHS.GAMES,
    element: <GamesPage />,
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <Typography variant={'h1'}>Page not found 404</Typography>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];

export { routes };
