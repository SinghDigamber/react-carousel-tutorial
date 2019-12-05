import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="../img-01.jpg" />
                </div>
                <div>
                    <img src="../img-02.jpg" />
                </div>
                <div>
                    <img src="../img-03.jpg" />
                </div>
            </Carousel>
        </div>
    );
}



