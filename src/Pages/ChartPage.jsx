import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Heading from '../Components/Heading';
import ChartComponentCombine from '../Components/ChartComponents/ChartcomponentsCombine';
const ChartPage = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Header className="sticky top-0" />
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-grow pr-4 ">
                    <Heading HeadingText={"Spot-Welding Analysis Graphs"} />
                </div>
            </div>
            <div className="flex flex-grow p-5">
                <ChartComponentCombine />
            </div>
            <Footer className="sticky bottom-0" />
        </div>
    );
};

export default ChartPage;