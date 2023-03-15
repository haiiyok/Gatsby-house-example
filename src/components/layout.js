/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"

import FloatingWhatsApp from 'react-floating-whatsapp'

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <React.Fragment>
     
        <Container fluid className="px-0 main" noGutters>

          <Navbar pageInfo={pageInfo} />

                <main>{children}</main>
      <Container className="waOpsi">
      <a
        href="https://wa.me/081370706611"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/color/96/000000/whatsapp--v5.png"/>
      </a>
      </Container>


                
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-6 item text">
                        
                    </div>
                </div>
                
                <h2 class="copyright">Hubungi</h2>
                <p class="copyright">081370706611</p>
            </div>
        </footer>
    </div>
        </Container>
        </React.Fragment>
      </>
    )}
  />
)

export default Layout
