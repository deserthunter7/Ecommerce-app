import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb py-4 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 font-weight-bold">
              <Link to="/" className="text-dark text-decoration-none">
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
