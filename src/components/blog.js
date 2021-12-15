import React from 'react'
import { Link } from 'gatsby'
import useBlogs from '../hooks/useBlogs'

const Blog = ({ limit }) => {
    const data = useBlogs();
    const nodes = limit ? data.allMdx.nodes.filter((node, index) => index+1 <= limit) : data.allMdx.nodes;
    return (
        <>
            {
                nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                        <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))
            }
        </>
    )
}

export default Blog