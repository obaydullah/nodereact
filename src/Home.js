import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Menu from "./Menu";
import FormHome from "./FormHome";
import "./app.css";

const Home = () => {
  return (
    <>
      <Menu />
      <FormHome />
    </>
  );
};

export default Home;
