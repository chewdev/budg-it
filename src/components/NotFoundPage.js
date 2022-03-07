import React from "react";
import { Link, useParams } from "react-router-dom";

const NotFoundPage = () => {
  const params = useParams();
  return (
    <div>
      <h3>
        <p>
          404: No match for <code>/{params["*"]}</code>
        </p>
        <Link to="/">Go Home</Link>
      </h3>
    </div>
  );
};

export default NotFoundPage;
