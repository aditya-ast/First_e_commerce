import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div classNameName='hero '>
            <div className="card bg-dark text-dark h-75">
                <img src="https://c0.wallpaperflare.com/preview/685/877/292/boutique-close-up-clothes-clothes-hanger.jpg" className="card-img, home_size" alt="Background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2 ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home