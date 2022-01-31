import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./app.css";

const Menu = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4">
            <Link to="/" className="logo">
              Workflow
            </Link>
          </div>
          <div className="col-lg-4 offset-lg-4 text-end">
            <div className="nav__link">
              <a href="#" className="post">
                post
              </a>
              <Link to="/project" className="project">
                project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
