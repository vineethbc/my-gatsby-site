import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Blog from '../components/blog'
import Layout from '../components/layout'
import PhotoCredit from '../components/photoCredit'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <article>Welcome to my blog.</article>
      <br/>
      <article>I am a Web developer with 10 years of experience & this is my first attempt to do a blog.</article>
      <br/>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/hero.jpg"
      />
      <PhotoCredit link={'https://unsplash.com/photos/JdoofvUDUwc'} text='Fernando Hernandez' />
      <br/>
      <Blog limit={3}/>
    </Layout>
  )
}

export default IndexPage