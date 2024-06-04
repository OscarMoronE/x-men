import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import phoenixDark from "./images/phoenix-black.png";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import logoX from './images/logoXmen.png'

export const Banner = () => {

    const [text] = useTypewriter({
        words: ['', 'Jean', 'Phoenix', 'a Xmen'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (

        <section className="banner" id="home">
            <div><img className="logoXmen" src={logoX}></img></div>
            <Container>
                <img className="phoenixDark" src={phoenixDark} alt="Phoenix" />
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="iam">
                            I am {' '}
                            <span style={{ fontWeight: 'bold', color: 'red' }}>
                                {text}
                            </span>
                            <span style={{ color: "yellow" }}><Cursor cursorStyle='|' /></span>
                        </h1>

                    </Col>
                </Row>
            </Container>
        </section>

    )
}