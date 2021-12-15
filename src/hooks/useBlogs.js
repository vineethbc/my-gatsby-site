import { useStaticQuery, graphql } from "gatsby"

const useBlogs = () => {
   const data = useStaticQuery(graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            }
            id
            slug
        }
        }
    }
  `)
  return data;
}

export default useBlogs