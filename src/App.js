import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { publicRoutes } from './router';
import ScrollToTop from './router/ScrollToTop';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop>
                    <Header />
                    <ToastContainer />
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route path={route.path} key={index} element={<Page />} />;
                        })}
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
