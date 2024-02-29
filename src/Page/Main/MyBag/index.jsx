import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./mybag.css";
import Navbar from "../../../Components/Module/Navbar";
import Button from "../../../Components/Base/button";
import MybagCard from "../../../Components/Base/MybagCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getByCustomerId } from "../../../config/redux/action/myBagAction";

const Mybag = () => {
  const { myBagList } = useSelector((state) => state.myBag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByCustomerId());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Container id="mybag">
        <Row className="mt-4">
          <h2>My bag</h2>
          <Col lg={8} className="mt-3">
            <div className="container d-flex align-items-center select-all">
              <div className="form-check ms-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="col-6 ms-2 select">
                <p>
                  Select all items <span>(2 items selected)</span>
                </p>
              </div>
              <div className="col-6 text-end">
                <button className=" delete">Delete</button>
              </div>
            </div>
            {myBagList.map((item) => (
              <div key={item.id}>
                <MybagCard
                  prodTitle={item.name}
                  descProduct={item.size}
                  cost={item.price}
                />
              </div>
            ))}
            {/* <div>
              <MybagCard prodTitle="Men's formal suit - Black" descProduct="Zalora Cloth" cost="200.000"/>
            </div> */}
          </Col>
          <Col lg={4} className="mt-3">
            {myBagList.map((item) => (
              <div className="ms-3 summary" key={item.id}>
                <p className="ms-3 pt-3 shop">Shopping summary</p>
                <Row>
                  <Col lg={8}>
                    <p className="price ms-3 pt-3">Total price</p>
                  </Col>
                  <Col lg={4}>
                    <p className="prices pt-3">Rp {item.price}</p>
                  </Col>
                  <div className="d-flex justify-content-center">
                    <Button className="mt-2 btn-buy" child="Buy" />
                  </div>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mybag;
