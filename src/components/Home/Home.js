import React from 'react';
import ClientComments from './ClientComments/ClientComments';
import Guides from './Guides/Guides';
import HomeBanner from './HomeBanners/HomeBanner';
import HomeDeals from './HomeDeals/HomeDeals';
import HomeDestinations from './HomeDestinations/HomeDestinations';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeDestinations></HomeDestinations>
            <HomeDeals></HomeDeals>
            <Guides></Guides>
            <ClientComments></ClientComments>
        </div>
    );
};

export default Home;