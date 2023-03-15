import React from "react"
import { Nav, Row, Col, Container, ListGroup, Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"


const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    
  <Row noGutters className="gambarUtama">
    
  <Carousel controls={true} id="home" transition="crossfade" autoplay>

  <Carousel.Item>
      <StaticImage className="gambarCarousel" src="../images/gambarc3.jpeg" alt="A dinosaur" />
      <div class="carousel-content">
      </div>
  </Carousel.Item>

  <Carousel.Item>
      <StaticImage className="gambarCarousel" src="../images/gambarc5.jpeg" alt="A dinosaur" />
      <div class="carousel-content">
      </div>
  </Carousel.Item>

  <Carousel.Item>
      <StaticImage className="gambarCarousel" src="../images/gambarc1.jpeg" alt="A dinosaur" />
      <div class="carousel-content">
      </div>
  </Carousel.Item>
  </Carousel>
  </Row>

 

  


  
   <Container className="opsiCardParent">
  <Container className="layoutCard">
      <Row noGutters>
        <Col md={3}>
          <div className="gambarCard text-center">
          <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/96/000000/external-dollar-money-currency-those-icons-lineal-those-icons-1.png"/>
          <p>Kenaikan property yang selalu meningkat 20% di setiap tahun nya</p>
          </div>
        </Col>
        
        <Col md={3}>
          <div className="gambarCard text-center">
          <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/
        000000/external-road-landscape-justicon-lineal-justicon-2.png"/>
          <p>Kemudahan akses ke berbagai tempat terbaik di daerah Jogja</p>
          </div>
        </Col>

        <Col md={3}>
          <div className="gambarCard text-center">
          <img src="https://img.icons8.com/ios/50/000000/home--v1.png"/>
          <p>Mengusung keamanan dan keasrian untuk setiap penghuni tercinta</p>
          </div>
        </Col>

        <Col md={3}>
          <div className="gambarCard text-center">
          <img src="https://img.icons8.com/pastel-glyph/64/null/first-place-ribbon.png"/>
          <p>Bangunan berkualitas dengan mengutamakan kenyamanan</p>
          </div>
        </Col>
        
      </Row>
      </Container>
      </Container>
       

      <Container className="judulCard">
      <Row>
        <Col>
        <p>Welcome</p>
        </Col>
      </Row>
      </Container>
      
      <Container className="containerCard">
      <Row className="paddingTop">
        <Col md={6}>
          <h1>Unit Investasi</h1>
          <p><h4>
Selamat datang di Unit Investasi terbaik di Yogyakarta. Menghadirkan sebuah Inovasi property untuk pecinta dan penggiat Investasi. Dengan lokasi yang berada di wilayah
strategis di kota Yogyakarta, berbagai dukungan infrastruktur, dan pusat nya perkembangan kota, menjadi penentu kenaikan nilai Investasi. 
</h4>
</p>
        </Col>
        <Col md={6}>
        <div className="aboutImg">
        <StaticImage  src="../images/welcomegambar1.jpeg" alt="A dinosaur" />
        </div>
        </Col>
      </Row>
      </Container>

      <Container className="judulCard">
      <Row>
        <Col>
        <p>Products</p>
        </Col>
      </Row>
      </Container>
      <div className="opsiProdukParent">


      <Container className="opsiProduk">
        <Row>
          <Col md={6} className="produkOverlay">
          <div className="opsiProduk">
          <a href="/H_Arkhakandara" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
              <StaticImage  src="../images/LOGO/LOGOARKHAKANDARA.png" alt="A dinosaur" className="gambarProduk"/>
              </Nav.Link>
          </a>
          <p>Arkha Kandara</p>
          </div> 
          </Col>
          
          <Col md={6} className="produkOverlay">
          <div className="opsiProduk">
          <a href="/H_Kandara" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
              <StaticImage  src="../images/LOGO/LOGOKANDARA.png" alt="A dinosaur" className="gambarProduk"/>
              </Nav.Link>
          </a>
          <p>Kandara Village</p>
          </div> 
          </Col>

          <Col md={6} className="produkOverlay">
          <div className="opsiProduk">
          <a href="/H_Mezzanine" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
              <StaticImage  src="../images/LOGO/LOGOMEZZANINE.png" alt="A dinosaur" className="gambarProduk"/>
              </Nav.Link>
          </a>
          <p>Mezzanine Adara</p>
          </div> 
          </Col>

          <Col md={6} className="produkOverlay">
          <div className="opsiProduk">
          <a href="/H_CentralParkTownhouse" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
              <StaticImage  src="../images/LOGO/LOGOCENTRALPARK1.png" alt="A dinosaur" className="gambarProduk"/>
              </Nav.Link>
          </a>
          <p>Central Park Townhouse</p>
          </div> 
          </Col>
        

      
          
          
        </Row>
      </Container>
      </div>
      <Container className="judulCard smooth-scroll" id="about">
      <Row>
      <Col>
        <p>Profit</p>
      </Col>
      </Row>
      </Container>

      <Container className="containerCard">
        
      <Row className="paddingTop">
        <Col md={6}>
          <h1>Aset Investasi</h1>
          <p><h4>Property di Yogyakarta sangatlah mengiurkan, Dengan kenaikan harga 
            property di Yogyakarta yang semakin menaik tiap tahun nya, sangat cocok untuk anda miliki aset .</h4></p>
        </Col>
        <Col md={6}>
        <div className="aboutImg">
        <StaticImage  src="../images/gambarabout2.jpeg" alt="A dinosaur" />
        </div>
        </Col>
      </Row>

      <Row className="paddingTop">
        <Col md={6}>
        <div className="aboutImg">
        <StaticImage  src="../images/gambarabout1.jpg" alt="A dinosaur" />
        </div>
        </Col>
        <Col md={6}>
          <h1>Lokasi Strategis dalam Ringroad</h1>
          <p><h4>Kapan lagi mempunyai Hunian dengan harga bersahabat di dalam Ringroad. Memudahkan anda untuk mobilitas di tempat terbaik Yogyakarta</h4></p>
        </Col>
      </Row>

      <Row className="paddingTop">
        <Col md={6}>
        <h1>Kawasan Terpadu</h1>
        <p><h4>Tidak hanya lokasi yang strategis, kami pun juga melakukan yang terbaik dari yang terbaik dengan 
          "One gate System" dan "CCTV" di setiap kawasan kami</h4></p>
        </Col>
        <Col md={6}>
        <div className="aboutImg">
        <StaticImage  src="../images/AboutBussiness2.jpg" alt="A dinosaur"/>
        </div>
        </Col>
      </Row>
      </Container>
  </Layout>
)

export default IndexPage