import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import defaultImage from "../../assets/images/black.jpg";
class Article extends Component {
    state = {
        numCards: this.props.numCards
    };

    render() {
        const toDisplay = [];
        let maximum = 0;
        let i = this.props.numCards;
        const keys = Object.keys(this.props.articles);
        keys.map(key => {
            return maximum++;
        });
        console.log(`articles are ${this.props.articles}`);
        if (i > maximum) {
            console.log(`max is ${maximum} i is ${i}`);
            i = maximum;
        }
        console.log(`i is ${i}`);
        for (i; i > 0; i--) {
            console.log(`i is ${i}`);
            toDisplay.push(this.props.articles[i - 1]);
            console.log(` looping through articles returning:`);
            console.log(this.props.articles[i]);
        }
        const carouselPages = toDisplay.map(source => {
            let site = source.source.name || "no source";
            let title = source.title || "no source";
            let author = source.author || "no source";
            let href = source.url || "no link";
            let src = source.urlToImage || defaultImage;
            let description = source.description || "no source";
            return (
                <Carousel.Item key={toDisplay.indexOf(source)}>
                    <h1>
                        <Badge variant="secondary">{site}</Badge>
                    </h1>
                    <img
                        className="d-block w-100"
                        src={src}
                        alt="news article"
                    />
                    <Carousel.Caption>
                        <h3>{title}</h3>
                        <p>
                            {author} reports: {description}
                        </p>
                        <Button variant="link" href={href} target="_blank">
                            Read More{" "}
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });

        return (
            //will replace this card. i want article to return rows with sliding elements that are cards with each response from that source

            <Carousel>{carouselPages}</Carousel>
        );
    }
}

export default Article;
