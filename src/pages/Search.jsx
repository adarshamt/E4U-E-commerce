import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Navbarmui from "../Componets/NavbarMui";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "../Services/AxiosInstance";
import { useState } from "react";

const Search = () => {
  const { id } = useParams();

  const nav = useNavigate();
 
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://e4u-server.onrender.com/products");

      setData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  

  const productFilter = data.filter((product) => {
    return product.productName.toLowerCase().includes(id.toLowerCase());
  });

  

  return (
    <>
      <Navbarmui />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 0 0 2%",
        }}
      >
        <MDBContainer fluid className="my-5">
          <MDBRow>
            {productFilter.map((item) => (
              <>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBCard>
                    <MDBCardImage
                      style={{ width: "15rem", height: "15rem" }}
                      src={item.images[0].url}
                      position="top"
                      alt="Laptop"
                      onClick={() => nav(`/view/products/${item._id}`)}
                    />
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <p className="small">
                          <a className="text-muted">
                            {item.store_id.storeName}
                          </a>
                        </p>
                        <p className="small text-danger">
                          <s>₹ 0000</s>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        {item.productName.length > 15 ? (
                          <>{item.productName.slice(0, 15)}<MDBIcon fas icon="ellipsis-h" /></>
                        ) : (
                          item.productName
                        )}
                        <h5 className="mb-0"></h5>
                        <h5 className="text-dark mb-0">₹ {item.price}</h5>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Search;
