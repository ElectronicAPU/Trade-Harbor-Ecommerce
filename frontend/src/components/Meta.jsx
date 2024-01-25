import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </>
  );
};

Meta.defaultProps = {
  title: "Welcome to Trade Harbor",
  description: "We sell all the best products for cheap",
  keywords: "electronic, buy electronic, cheap electronics",
};

export default Meta;
