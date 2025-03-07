import iconStar from "../../../assets/icons/icon-start.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { getNewProduct } from "../../../config/redux/action/productAction";

const NewProduct = () => {
  const { loading, productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewProduct());
  }, []);

  return (
    <>
      <div>
        {loading && (
          <div className="d-flex align-items-center justify-content-center">
            <FidgetSpinner />
          </div>
        )}
        <div className="d-flex flex-wrap row-gap-4 gap-3 mb-5 mt-3">
          {productList.slice(0, 6).map((product) => (
            <div id="card" key={product.id}>
              <div className="content" style={{ marginLeft: "6%" }}>
                <div className="card h-100" style={{ width: "200px" }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="stretched-link"
                  ></Link>

                  <img
                    crossOrigin="anonymous"
                    src={product.image}
                    className="card-img-top"
                    alt="cardImage"
                    style={{ height: "136px" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h4
                      className="card-title text-dark"
                      style={{ fontSize: "16px" }}
                    >
                      {product.name}
                    </h4>
                    <div>
                      <h5 className="text-danger metropolis-b">
                        Rp. {product.price}
                      </h5>
                      <span className="card-text text-secondary text-break">
                        Zalora Cloth
                      </span>
                      <div>
                        <img src={iconStar} alt="Star" />
                        <img src={iconStar} alt="Star" />
                        <img src={iconStar} alt="Star" />
                        <img src={iconStar} alt="Star" />
                        <img src={iconStar} alt="Star" />
                        <span className="text-secondary">(5)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewProduct;
