import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

export const ApplicationRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.id}
                    path={route.path}
                    element={<route.element />}
                />
            )}
        </Routes>
    );
}