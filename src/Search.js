import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./app.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container>
      <Row>
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="col-lg-12">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="search"
                  className="search"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Search;
