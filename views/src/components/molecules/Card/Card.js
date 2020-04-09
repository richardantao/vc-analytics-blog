import React from "react";

import { Card, CardHeader, CardBody, CardImg, CardFooter, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap";

export default ({ key, title, category, image, text, urlPath }) => {
    return (
        <Card key={key}>
            <CardHeader>
                <CardTitle><h4><a href={`/blog/${urlPath}`}>{title}</a></h4></CardTitle>
                <CardSubtitle><h5>{category}</h5></CardSubtitle>
            </CardHeader>
            <CardImg src={image}/>
            <CardBody>
                <CardText>
                    {text.substring(0, 200) + "..."} 
                </CardText>
            </CardBody>
            <CardFooter>
                <CardLink href={`/blog/${urlPath}`}>Go to Post</CardLink>
            </CardFooter>
        </Card>
    );  
};