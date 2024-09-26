import React from 'react'
import {Carousel} from 'react-bootstrap';
import img1 from './tiopaints.jpg';
import img2 from './a2.jpg';
import img3 from './a3.jpg';
import "./slider.css"

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        
                        src={img1}
                        height="600"
                        className='slider'
                        width="90%"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                       
                        src={img2}
                        height="600"
                        className='slider'
                        width="90%"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                       
                        src={img3}
                        alt="Third slide"
                        height="600"
                        className='slider'
                        width="90%"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </>
    )
}

export default HeroSlider