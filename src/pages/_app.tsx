import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import getConfig from "next/config";

export default function App({ Component, pageProps }: AppProps) {
  const { publicRuntimeConfig } = getConfig();
  const { API_KEY, REACT_APP_BLOG_ENDPOINT } = publicRuntimeConfig;

  const client = new ApolloClient({
    uri: process.env.REACT_APP_BLOG_ENDPOINT,
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
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
      `,
    })
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
