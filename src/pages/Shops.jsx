// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";

import Navbar from "../Componets/NavbarMui";

import "../Styles/Store.css";
import axios from "../Services/AxiosInstance";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { Breadcrumbs, Stack, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const Shops = () => {
  const [data, setData] = useState([]);

  const nav = useNavigate();

  const getStores = async () => {
    try {
      const response = await axios.get("http://localhost:4743/stores/list");

      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getStores();
  }, []);

  function handleClick(event) {
    event.preventDefault();
    nav("/");
  }

  const breadcrumbs = [
    // <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
    //   Home
    // </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      Store
    </Typography>,
  ];

  return (
    <>
      <Navbar />
      <div style={{ margin: "2%" }} className="BreadCrumbs">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <div className="store_main_container">
        <div className="sidebar_main">
          <h3>category</h3>

          <ListGroup>
            <ListGroup.Item>
              <a href="#0">Grocery</a>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#1">Fruits</a>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#2">Vegitabels</a>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#3">Meat</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#4">Fish</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#5">Bakery</a>
            </ListGroup.Item>
          </ListGroup>
        </div>

        {/* ***************** stors display ************** */}

        <div className="list_container">
          <h2 id="0">Grocery</h2>
          <div id="cards" className="grocery_div">
            {data
              .filter((item) => item.category == "Grocery")
              .map((itm) => (
                <>
                  <div key={itm._id}>
                    <Card
                      onClick={() => nav(`/storeproducts/${itm._id}`)}
                      key={itm._id}
                      style={{
                        width: "18rem",
                        padding: "3%",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "transparent",
                        borderRadius: "24px",
                      }}
                    >
                      <Card.Img variant="top" src={itm.image[0][0].url} />
                      <Card.Body>
                        <Card.Title>{itm.storeName}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button
                          onClick={() => nav(`/storeproducts/${itm._id}`)}
                          variant="contained"
                          color="success"
                        >
                          Buy now
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ))}
          </div>

          <h2 id="1">FRUITS</h2>
          <div id="cards" className="fruits_div">
            {data
              .filter((item) => item.category == "Fruits")
              .map((itm) => (
                <>
                  <div key={itm._id}>
                    <Card
                      onClick={() => nav(`/storeproducts/${itm._id}`)}
                      key={itm._id}
                      style={{
                        width: "18rem",
                        padding: "3%",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "transparent",
                        borderRadius: "24px",
                      }}
                    >
                      <Card.Img variant="top" src={itm.image[0][0].url} />
                      <Card.Body>
                        <Card.Title>{itm.storeName}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button
                          onClick={() => nav(`/storeproducts/${itm._id}`)}
                          variant="contained"
                          color="success"
                        >
                          Buy now
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ))}
          </div>

          <h2 id="2">VEGITABLES</h2>
          <div id="cards" className="Vegitables_div">
            {data
              .filter((item) => item.category == "Vegitables")
              .map((itm) => (
                <>
                  <div key={itm._id}>
                    <Card
                      onClick={() => nav(`/storeproducts/${itm._id}`)}
                      key={itm._id}
                      style={{
                        width: "18rem",
                        padding: "3%",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "transparent",
                        borderRadius: "24px",
                      }}
                    >
                      <Card.Img variant="top" src={itm.image[0][0].url} />
                      <Card.Body>
                        <Card.Title>{itm.storeName}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button
                          onClick={() => nav(`/storeproducts/${itm._id}`)}
                          variant="contained"
                          color="success"
                        >
                          Buy now
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ))}
          </div>

          <h2 id="3">Meat</h2>
          <div id="cards" className="Meat_div">
            {data
              .filter((item) => item.category == "Meat")
              .map((itm) => (
                <>
                  <div key={itm._id}>
                    <Card
                      onClick={() => nav(`/storeproducts/${itm._id}`)}
                      key={itm._id}
                      style={{
                        width: "18rem",
                        padding: "3%",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "transparent",
                        borderRadius: "24px",
                      }}
                    >
                      <Card.Img variant="top" src={itm.image[0][0].url} />
                      <Card.Body>
                        <Card.Title>{itm.storeName}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button
                          onClick={() => nav(`/storeproducts/${itm._id}`)}
                          variant="contained"
                          color="success"
                        >
                          Buy now
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ))}
          </div>

          <h2 id="4">Fish</h2>
          <div id="cards" className="Fish_div">
            {data
              .filter((item) => item.category == "Fish")
              .map((itm) => (
                <>
                  <div key={itm._id}>
                    <Card
                      onClick={() => nav(`/storeproducts/${itm._id}`)}
                      key={itm._id}
                      style={{
                        width: "18rem",
                        padding: "3%",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "transparent",
                        borderRadius: "24px",
                      }}
                    >
                      <Card.Img variant="top" src={itm.image[0][0].url} />
                      <Card.Body>
                        <Card.Title>{itm.storeName}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button
                          onClick={() => nav("/storeproducts")}
                          variant="contained"
                          color="success"
                        >
                          Buy now
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ))}
          </div>

          <h2 id="5">Bakery</h2>
          <div id="cards" className="Bakery_div">
            {data
              .filter((item) => item.category == "Bakery")
              .map((itm) => (
                <>
                  <div key={itm._id}>
                    <Card
                      onClick={() => nav(`/storeproducts/${itm._id}`)}
                      style={{
                        width: "18rem",
                        padding: "3%",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "transparent",
                        borderRadius: "24px",
                      }}
                    >
                      <Card.Img variant="top" src={itm.image[0][0].url} />
                      <Card.Body>
                        <Card.Title>{itm.storeName}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button
                          color="success"
                          variant="contained"
                          onClick={() => nav(`/storeproducts/${itm._id}`)}
                        >
                          Shop now
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shops;
