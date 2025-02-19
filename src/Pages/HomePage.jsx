import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Heading from '../Components/Heading';
import SpotWeldingTable from '../Components/SpotWeldingTable';
import ChartButton from '../Components/ChartButton';
import ReportsButton from '../Components/ReportsButton';

const HomePage = () => {
    const navigate = useNavigate();

    const handleChartButtonClick = () => {
        navigate('/chart');
    };

    return (
        <div className="flex flex-col h-screen ">
            <Header className="sticky top-0" />
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-grow pr-4 ">
                    <Heading HeadingText={"Spot-Welding Analysis Dashboard"}/>
                </div>
                <div className="flex space-x-2">
                    {/* <ChartButton /> */}

                    {/* onClick={handleChartButtonClick} */}
                    {/* <ReportsButton /> */}
                </div>
            </div>
            <div className="flex flex-grow p-5">
                <SpotWeldingTable />
            </div>
            <Footer className="sticky bottom-0" />
        </div>
    );
};

export default HomePage;