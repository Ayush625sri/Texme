import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({ title = "Texme", description = "Texme whenever you are free!" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
