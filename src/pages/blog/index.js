import * as React from 'react'
import Blog from '../../components/blog'
import Layout from '../../components/layout'

const BlogPage = () => {
  return (
    <Layout pageTitle="Posts">
      {
        <Blog />
      }
    </Layout>
  )
}

export default BlogPage