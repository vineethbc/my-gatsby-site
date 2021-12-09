import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <title>A Gatsby page</title>
      My first Gatsby site 
      <nav>
        <a href="/my-gatsby-site">Home</a>
      </nav>
    </main>
  )
}

export default AboutPage
