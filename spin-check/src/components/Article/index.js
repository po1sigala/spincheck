import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
class Article extends Component {
    state = {
        numCards: this.props.numCards
    };
    render() {
        console.log(`the responses im working with are`);
        console.log(this.props.articles);

        return (
            //will replace this card. i want article to return rows with sliding elements that are cards with each response from that source

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Article;
