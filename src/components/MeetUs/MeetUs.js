import React from 'react';
import { Row } from 'react-bootstrap';
import banner from '../../images/banner.jpg'
import useStuff from '../hooks/useStuff';
import Stuff from './Stuff/Stuff';
import './meatus.css'

const MeetUs = () => {
    const { stuffes } = useStuff();

    return (
        <div>
            <div className="banner">
                <img src={banner} alt="bannaer" />
            </div>
            <div className="aboutus">
                <h2>About Us</h2>
                <p>Travel makes us happy! Seeing new things, and old, meeting new people and learning more about the world through local eyes is our passion.

                    That's why we love free tours, and why we thought it was about time there was a great platform for connecting smart travellers with excellent local free tour guides and budget tour providers in destinations across the globe; and so, FREETOUR.com was born!

                    We started in 2014 in Dublin with a small crew, and today we are proud to be an international team of delightful, creative, and fun-loving people at FREETOUR HQ, each with a repertoire of skills and striking handsomeness (okay, that last one applies mostly to Rio, the FREETOUR.com office doggo – Hungarian Vizsla, and a true beauty.)

                    Our main ambition is to make it easier for smart travellers, like you, to Free Your World!</p>
            </div>
            <div className="wannaknow">
                <h3>Wanna know more?</h3>
                <p>FREETOUR.com is the first platform of its kind, allowing visitors to easily find and book top quality free and budget tour providers around the world.

                    These tours & activities are the perfect way to explore new cities & engage in authentic local culture on fair terms, without the high price! With tour providers in over 120 countries worldwide - and more added daily, great features, and more on the way, Freetour.com & the Free Tour mobile app are increasingly essential travel tools for a new generation of travelers seeing the world.

                    Not only that, but we've made it super easy for anyone with a knack for guiding to share their local knowledge, passion, and fun with visitors to their city too.

                    We're proud to be at the forefront of popularising free tours, flying the flag for free tour operators, and championing the concept as the best way to get unrivaled authentic local insight to a new place, to life lived there, and how history, culture, tradition, and stories have shaped the places we visit.

                    You can read more about the free tour concept here.</p>

            </div>
            <div className="stuff-container">
                <h2>Meet With our Stuff</h2>
                <Row xs={1} md={3} lg={5} className="g-4">
                    {
                        stuffes.map(stuff => <Stuff stuff={stuff} key={stuff._id}></Stuff>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default MeetUs;