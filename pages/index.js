// import Head from "next/head";
import Header from "../Components/Header";
import ProductsCards from "../Components/ProductsCards";
import Footer from "../Components/Footer";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const endpoint = "https://twstg2.eu.saleor.cloud/graphql/";

export default function Home({ products }) {
  // console.log(products);
  return (
    <div>
      <Header className={styles.head} />
      <ProductsCards products={products.edges} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        products(channel: "uk", first: 21) {
          totalCount
          edges {
            node {
              id
              name
              rating
              
              collections {
                name
              }
              slug
              created
              media {
                url
              }
              category {
                description
              }
              seoTitle
              seoDescription
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products,
    },
  };
}
