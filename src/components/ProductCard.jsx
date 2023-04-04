import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";

import Skeleton from "./Skeleton";

import car from "../img/volvo.jpg";
import "../SASS/product-card.scss";

const ProductCard = ({ item, isLoading }) => {
  const { name, model, year, color, price } = item;
  return (
    <Col md="4" lg="3" className="mb-5">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <div className="product__item">
            <div className="product__img">
              <img src={car} alt="Car" />
            </div>
            <div className="p-2 product__info">
              <h3 className="product__name">
                {name} <span>{model}</span>
              </h3>
              <p>Year: {year}</p>
              <p>Color: {color}</p>
            </div>

            <div className="product__card-bottom d-flex align-items-center justify-content-between">
              <span className="price">$ {price}</span>
              <motion.span whileHover={{ scale: 1.3 }}>
                <i class="ri-delete-bin-6-fill"></i>
              </motion.span>
            </div>
          </div>
        </>
      )}
    </Col>
  );
};

export default ProductCard;
