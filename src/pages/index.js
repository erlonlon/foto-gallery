import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import '../assets/style.css'
import Header from '../components/Header'

const Index = () => {

  const images = useStaticQuery(graphql`
  
  {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 480, height: 240) {
              ...GatsbyImageSharpFixed
             
            }
          }
        }
      }
    }
  }  
  
  `)

  return (
    <div>
      <Header />
      {images.allFile.edges.map(image => {
        return <Image fixed={image.node.childImageSharp.fixed} />
      })}
    </div>
  )
}

export default Index