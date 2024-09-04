import { MainPage } from "../../../pages/mainPage";

export const publicRoutes = [
    { id: '1', path: 'main', element: MainPage },

    { id: '2', path: '*', element: MainPage },
];