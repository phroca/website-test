/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { allContentfulLink } = useStaticQuery(
    graphql`
      query {
        allContentfulLink(sort: { fields: [createdAt], order: ASC}) {
          edges {
            node {
              title
              url
              id
              createdAt
            }
          }
        }
      }
    `
  )

const edges = allContentfulLink.edges;
  return (
    <div>
        <Header />
        <main>{children}</main>
        
        <Footer data={edges}>
        Website in React by ROCA-IT. Email us to ask anything. © {new Date().getFullYear()}
        </Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
