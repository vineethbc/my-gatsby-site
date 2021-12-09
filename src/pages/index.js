import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>A Gatsby page</title>
      My New Gatsby site
      <nav>
        <a href="/my-gatsby-site/about">About</a>
      </nav>
    </main>
  )
}

export default IndexPage
