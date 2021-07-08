import React from "react";
// Data
import products from "../../utils/products.json";
// Components
import Layout from "../../components/layout/Layout";
import HomeCategory from "../../components/categoryPreview/HomeCategory";
import ScrollButton from "../../components/scrollButton/ScrollButton";
// context
import { RoutesContext } from "../../context/routesContext/RoutesContext";

const Home = ({ scrollBtnVizibility, handleScrollToTop }) => {
  return (
    <RoutesContext.Consumer>
      {({ categories }) => (
        <Layout>
          <div className="container-fluid container-min-max-width">
            <div className="row">
              {categories.map((category, index) => (
                <HomeCategory
                  key={index}
                  route={category}
                  name={products[category].name}
                  description={products[category].description}
                  image={products[category].image}
                />
              ))}
            </div>
            <ScrollButton
              scrollBtnVizibility={scrollBtnVizibility}
              handleScrollToTop={() => handleScrollToTop()}
            />
          </div>
        </Layout>
      )}
    </RoutesContext.Consumer>
  );
};

export default Home;
