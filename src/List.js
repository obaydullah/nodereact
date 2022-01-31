import { useState, useEffect } from "react";
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./app.css";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/theme").then((data) => {
      setData(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col lg={4}>
            <div className="theme__card">
              <h2>Theme Name : {item.name}</h2>
              <h3>Category: {item.category}</h3>
              <a href={item.link} target="_blank">
                Visit Website
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
