import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./app.css";

const FormHome = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/theme", {
        name,
        category,
        link,
      })
      .then(() => {
        alert("submit successfully");
        setName("");
        setCategory("");
        setLink("");
      });
  };

  return (
    <div className="form">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Theme Name"
                  className="form__input"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Category Name"
                  className="form__input"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Link"
                  className="form__input"
                  onChange={(e) => setLink(e.target.value)}
                  value={link}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="submit__btn"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormHome;
