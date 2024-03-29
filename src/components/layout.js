import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `)
    return (
      <>
        <Header />
       
            <main>{children}</main>
         
        <Footer />
        
        </>
    )
    }
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      }

export default Layout
