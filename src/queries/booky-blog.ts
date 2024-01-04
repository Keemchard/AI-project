import { gql } from "@apollo/client";

export const GET_ALL_ARTICLES = gql`
  query hey {
    posts {
      nodes {
        id
        slug
        featuredImage {
          sourceUrl
          uri
        }
        title
        author {
          firstName
          name
        }
        date
      }
    }
  }
`;

export const ALL_ARTICLES_QUERY = gql`
  query {
    posts {
      nodes {
        id
        slug
        content
        featuredImage {
          sourceUrl
          uri
        }
        title
        author {
          firstName
          name
        }
        date
      }
    }
  }
`;
