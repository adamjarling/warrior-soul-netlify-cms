import React from "react";
import TourDates from "../../components/TourDates";
import Layout from "../../components/Layout";
import stage from "../../images/photo-live-crowd-bw.jpg";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const TourPage = ({
  data: {
    allFile: { totalCount, edges }
  }
}) => {
  return (
    <Layout>
      <Img fluid={edges[0].node.childImageSharp.fluid} />
      <TourDates />
    </Layout>
  );
};

export default TourPage;

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "customimages" }
        relativePath: { eq: "photo-live-crowd-bw.jpg" }
      }
    ) {
      totalCount
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
