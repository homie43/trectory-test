import React from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

import ProductList from "./ProductList";
import Sort from "./Sort";

import "../SASS/layout.scss";

const Layout = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [sortType, setSortType] = React.useState({
    name: "году выпуска👆",
    sortProperty: "year",
  });

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const itemsRespons = await axios.get(
          `https://test.tspb.su/test-task/vehicles?_sort=id&_order=DESC`
        );
        setItems(itemsRespons.data);
        setIsLoading(false);
      } catch (e) {
        console.log("Ошибка при запросе данных");
        console.log(e);
      }
    }
    fetchData();
  }, [sortType]);

  return (
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title ">Автомобили</h2>
          </Col>

          {/* <Sort value={sortType} items={items} /> */}
          <ProductList items={items} isLoading={isLoading} />
        </Row>
      </Container>
    </section>
  );
};

export default Layout;
