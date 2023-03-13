import React from "react";
import { Route, Routes } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import '../index.css'
import Header from "../components/header/header";
import Footer from '../components/footer/footer'
const Home = React.lazy(() => import('../components/pages/Home.js'))
const RouterList = () => {
    return (
        <>

            <Header />
            <Routes >
                <Route path='/home' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>

                        <Home />
                    </React.Suspense>
                } />
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}
export default RouterList