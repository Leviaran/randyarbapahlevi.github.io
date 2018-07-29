import React, { Component } from "react";
import Link from "gatsby-link";
import get from 'lodash/get'
import Helmet from 'react-helmet'


import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'
import * as fontAwesome from 'react-icons/lib/fa/'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (

    <div>
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          MobileDev
          </Link>
      </h1>

      <Bio />
      <hr />

      {group.map(({ node }) => (
        <div key={node.id} className="blogListing">
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
              {get(node, 'frontmatter.title')}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />


        </div>

      ))}

      <hr />

      <div style={{ columnCount: 3, textAlign: 'center' }}>
        <div className="previousLink">
          <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
        </div>
        <div>
          <p>{index} from {pageCount}</p>
        </div>
        <div className="nextLink">
          <NavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </div>
    </div>
  );
};
export default IndexPage;

// import React from 'react'
// import Link from 'gatsby-link'
// import get from 'lodash/get'
// import Helmet from 'react-helmet'

// import Bio from '../components/Bio'
// import { rhythm } from '../utils/typography'

// class BlogIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const posts = get(this, 'props.data.allMarkdownRemark.edges')

//     return (
//       <div>
//         <Helmet title={siteTitle} />
//         <Bio />
//         {posts.map(({ node }) => {
//           const title = get(node, 'frontmatter.title') || node.fields.slug
//           return (
{/* <div key={node.fields.slug}>
  <h3
    style={{
      marginBottom: rhythm(1 / 4),
    }}
  >
    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
      {title}
    </Link>
  </h3>
  <small>{node.frontmatter.date}</small>
  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
</div> */}
//           )
//         })}
//       </div>
//     )
//   }
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `
