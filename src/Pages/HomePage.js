import React, {useEffect} from 'react';
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import SectionBlack from "../Components/SectionBlack";
import SectionWhite from "../Components/SectionWhite";

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <SectionBlack />
            <SectionWhite />
        </div>
    );
};

export default HomePage;