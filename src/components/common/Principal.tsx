import React, { useState, useEffect } from "react";
import data from '@/data/data.json';
import NavBar from "./NavBar";
import Home from "./Home";
import Planes from "./Planes";
import FaqS from "./FaqS";

function Principal() {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const userLang = navigator.language; // Usamos solo navigator.language
        if (userLang.startsWith('en')) {
            setLanguage('en');
        } else {
            setLanguage('es');
        }
    }, []);

    return (
        <>
            <NavBar language={language} setLanguage={setLanguage} data={data[language]} />
            <Home data={data[language]}/>
            <Planes data={data[language]}/>
            <FaqS data={data[language]}/>
        </>
    );
}

export default Principal;
