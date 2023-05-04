import React, { useState, useEffect, createContext } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './App'
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LogIn/LoginPage'
import { BodegasPage } from './pages/BodegasPage/BodegasPage'
import { AddBodega } from './pages/BodegasPage/AddBodega'
import { UpdateBodega } from './pages/BodegasPage/UpdateBodega';
import { AddUser } from './pages/NewUser/AddUser';
import { ArrendarPage } from './pages/ArrendarPage/ArrendarPage';
import { AddArrendamiento } from './pages/ArrendarPage/AddArrendamiento';

export const NombreContexto = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [disponible, setDisponible] = useState(false)
    const [dataUser, setDataUser] = useState({
        name: '',
        username: '',
        role: '',
    })

    const routes = createBrowserRouter([
        {
            errorElement: <NotFoundPage />,
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/login',
                    element: <LoginPage />
                },
                {
                    path: '/bodegas',
                    element: <BodegasPage />
                },
                {
                    path: '/addBodega',
                    element: <AddBodega />
                },
                {
                    path:'/updateB/:id',
                    element: <UpdateBodega />
                }, 
                {
                    path: '/addUser', 
                    element: <AddUser> </AddUser>
                },
                {
                    path: '/arrendar', 
                    element: <ArrendarPage/>
                },
                {
                    path: '/addArrendamiento',
                    element: <AddArrendamiento/>
                }


            ]
        }
    ])


return (
    <NombreContexto.Provider value={{ loggedIn, setLoggedIn, disponible, setDisponible, dataUser, setDataUser }}>
        <RouterProvider router={routes} />
    </NombreContexto.Provider>
)
}