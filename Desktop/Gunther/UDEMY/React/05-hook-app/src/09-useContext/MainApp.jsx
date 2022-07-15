import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';
import { UserProvider } from './context/UserProvider';
//import { NotFound } from './NotFound';
 
export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Main App</h1>
            <NavBar />
            <hr/>

            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='login' element={ <LoginPage /> } />
                <Route path='about' element={ <AboutPage /> } />

                {/* <Route path='/*' element={ <NotFound /> } /> */}
                <Route path='/*' element={ <Navigate to='/about' /> } />

            </Routes>
            
        </UserProvider>
    )
}
