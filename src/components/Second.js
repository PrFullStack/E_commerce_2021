import React  from 'react'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export class Second extends Component{
    render() {
        return(
            <div>
            <Carousel>
              <Carousel.Item>
              <img src="pic3.jpeg" width="1350" height="400"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="pic2.png" width="1350" height="400"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="pic1.png" width="1350" height="400"/>
              </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}