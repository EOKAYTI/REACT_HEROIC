import React from "react";
import "./item.scss";

const Item = () => {
  return (
    <div className="item">
      <div className="item_card">
        <div className="item_icon">
          <i className="fa-solid fa-download"></i>
        </div>
        <div className="item_content">
          <h5>Fresh new layout</h5>
          <p>
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
