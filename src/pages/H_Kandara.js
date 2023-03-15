import React from "react"
import { Link } from "gatsby"
import { Nav, Row, Col, Container, ListGroup, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "Kandara Village" }}>
    <SEO title="Kandara Village" />

    <Container className="judulCard">
      <Row>
        <Col>
        <p>Kandara</p>
        </Col>
      </Row>
      </Container>

    <Container className="opsiHalaman">
  
        
  
        <Row className="paddingTop">
          <Col md={6}>
          <div className="aboutImg">
          <StaticImage  src="../images/PK_KANDARA/01.jpg" alt="A dinosaur" />          </div>
          </Col>
          <Col md={6}>
            <h1>Lokasi</h1>
            <p>
              Pugeran, Maguwoharjo, Depok, Sleman, DI Yogyakarta
            </p>
          </Col>
        </Row>
  
     

        <Row className="paddingTop">
          <Col md={6}>
          <div className="aboutImg">
          <StaticImage  src="../images/PK_KANDARA/02.jpg" alt="A dinosaur" />          </div>
          </Col>
          <Col md={6}>
            <h1>Selling Point</h1>
            <p>
              <ul>
              <li>5 Menit ke Ambarukkmo Plaza</li>
              <li>5 Menit ke Transpark Mall</li>
              <li>5 Menit ke Hartono Mall</li>
              <li>10 Menit ke Bandara Adisucipto</li>
              <li>10 Menit dari UPN</li>
              <li>10 Menit dari AtmaJaya</li>
              </ul>
              </p>
          </Col>
        </Row>

        <Row className="paddingTop">
          <Col md={6}>
          <div className="aboutImg">
          <StaticImage  src="../images/PK_KANDARA/05.jpg" alt="A dinosaur" />          </div>
          </Col>
          <Col md={6}>
            <h1>Denah Bangunan</h1>
            <p>
              <ul>
              <li>Luas Tanah 50</li>
              <li>Luas Bangunan 36</li>
              <li>2 Kamar Tidur</li>
              <li>Kamar Mandi</li>
              <li>Carport</li>
              <li>PDAM</li>
              <li>1300 WATT</li>
              <li>Lebar Jalan 5m</li>
              <li>One Gate Sistem</li>
              </ul>
            </p>
          </Col>
        </Row>

        <Row className="paddingTop">
          <Col md={6}>
          <div className="aboutImg">
          <StaticImage  src="../images/PK_KANDARA/03.jpg" alt="A dinosaur" />          </div>
          </Col>
          <Col md={6}>
            <h1>Spesifikasi Bangunan</h1>
            <p>
              <ul>
              <li>Footplate     : Batu kali</li>
              <li>Dinding       : Bata Hebel fin.cat</li>
              <li>Plafond       : Gypsum board, Rangka metal furing</li>
              <li>Penutup Atap  : Galvalum pasir, Metal truss</li>
              <li>Kusen         : Kusen Alumunium</li>
              <li>Pintu         : Pintu kamar teakwood finHPL</li>
              <li>Jendela       : Jendela kaca mati frame alumunium</li>
              </ul>
            </p>
          </Col>
        </Row>
    
  </Container>
  </Layout>
)

export default SecondPage
