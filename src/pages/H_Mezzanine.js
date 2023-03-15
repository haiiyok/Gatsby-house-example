import React from "react"
import { Link } from "gatsby"
import { Nav, Row, Col, Container, ListGroup, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "Mezzanine Adara" }}>
    <SEO title="Mezzanine Adara" />

    <Container className="judulCard">
      <Row>
        <Col>
        <p>Mezzanine Adara</p>
        </Col>
      </Row>
      </Container>

    <Container className="opsiHalaman">
  
        
  
        <Row className="paddingTop">
          <Col md={6}>
          <div className="aboutImg">
          <StaticImage  src="../images/PK_MEZZANINE/01.jpg" alt="A dinosaur" />          </div>
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
          <StaticImage  src="../images/PK_MEZZANINE/02.jpg" alt="A dinosaur" />          </div>
          </Col>
          <Col md={6}>
            <h1>Selling Point</h1>
            <p>
              <ul>
              <li>2 Menit ke Ambarukkmo Plaza</li>
              <li>5 Menit dari AtmaJaya</li>
              <li>5 Menit dari UPN Yogyakarta</li>
              <li>5 Menit dari Sanata Dharma</li>
              <li>5 Menit ke Hartono Mall</li>
              <li>10 Menit ke Bandara Adisucipto</li>
              </ul>
              </p>
          </Col>
        </Row>

        <Row className="paddingTop">
          <Col md={6}>
          <div className="aboutImg">
          <StaticImage  src="../images/PK_MEZZANINE/04.jpg" alt="A dinosaur" />          </div>
          </Col>
          <Col md={6}>
            <h1>Denah Bangunan</h1>
            <p>
              <ul>
              <li>Luas Tanah 60</li>
              <li>Luas Bangunan 65</li>
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
          <StaticImage  src="../images/PK_MEZZANINE/03.jpg" alt="A dinosaur" />          </div>
          </Col>
          <Col md={6}>
            <h1>Spesifikasi Bangunan</h1>
            <p>
              <ul>
              <li>Lantai        : Keramik 60 x 60</li>
              <li>Dinding       : Bata Merah</li>
              <li>Plafond       : Gypsum board dengan Finishing cat</li>
              <li>Penutup Atap  : Galvalum pasir, Metal truss</li>
              <li>Pintu         : Kayu CatPlitur</li>
              <li>Jendela       : Kaca frame alumunium</li>
              <li>Sanitair       : Closet Duduk by American Standart</li>
              </ul>
            </p>
          </Col>
        </Row>
    
  </Container>
  </Layout>
)

export default SecondPage
