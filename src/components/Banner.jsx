import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'JavaScript Programmer', 'Front-end Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting&&updatedText===fullText){
            setIsDeleting(true);
            setDelta(period)
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false)
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => {
            clearInterval(ticker)
        }
    }, [text]);


    return (
      <div>
          <section className={'banned'} id={'home'}>
              <Container>
                  <Row className={'align-items-center'}>
                      <Col xs={12} md={6} xl={7}>
                          <span className={'tagline'}>Welcome to my Portfolio</span>
                          <h1>{`Hi I'm Dima Berlinskyi `}<span className={'wrap'}>{text}</span></h1>
                          <p>I'm a result oriented front-end
                              developer with experience in
                              creating Landing Pages and SPA,
                              browser extensions,
                              using React(JS/TS), Redux, HTML &CSS.
                              Now I am improving my skills in
                              this direction and expanding them
                              with new technologies.
                              Also I have interest to learn React Native,Node.js.
                              I would like to find a project work/full- time job in a creative company with
                              up-to-date task and collaborative team!
                          </p>
                          <button
                            onClick={() => console.log('connect')}>
                              Let's connect<ArrowRightCircle size={25}></ArrowRightCircle>
                          </button>
                      </Col>
                      <Col xs={12} md={6} xl={5}>
                          <img src={headerImg} alt="Header img"/>
                      </Col>
                  </Row>
              </Container>
          </section>
      </div>
    );
};

export default Banner;
