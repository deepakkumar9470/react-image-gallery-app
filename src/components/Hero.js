import React from 'react'
import { Search } from '@mui/icons-material'



const Hero = () => {
    return (
        <div className="container-fluid m-0 p-0">


            <div className="img_div">
                <img className="image-div img-fluid" src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="bg" />

                <div className="txt_div">
                    <h2 className="hero-text mb-3">Download High Quality Images by creators</h2>
                    <span className="span-text mb-4">Over 2.4 million+ stock Images by our talented community</span>

                    <div className="hero-form">
                        <Search className="searchBarHero" />
                        <input className="form-control input_div mt-2" type="search" placeholder="Search image here" aria-label="Search" />
                    </div>

                </div>


            </div>



        </div>
    )
}

export default Hero
