import React from 'react';
import bannerImg from '../images/restauranfood.jpg'
import { BrowserRouter, Link } from 'react-router-dom';
const Header = () =>{
    return (
        <BrowserRouter>
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Boston, Chicago</h3>
                    <p>We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt=''/>
                </div>
            </section>
        </header>
        </BrowserRouter>
    )
}
export default Header