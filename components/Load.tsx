import React from "react";
import { Card, Col, Placeholder } from "react-bootstrap";

const Load = () => {
    return (
        <>
            <Col xs={12} md={6} lg={3} className="mb-4">
                <Card className="shadow-lg bg-secondary rounded-0">
                    <Card.Img
                        src="
                    https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
                        variant="top"
                        className="rounded-0"
                        alt=""
                    ></Card.Img>

                    <Card.Body className="bg-secondary border-top border-dark">
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={12}></Placeholder>
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                            <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                            <Placeholder xs={8} />
                        </Placeholder>

                        <Placeholder.Button
                            variant="warning"
                            xs={6}
                        ></Placeholder.Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Load;
