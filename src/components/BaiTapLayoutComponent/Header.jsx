// import giúp file khác import được file này và sử dụng
import React from "react";
import "./header.scss";
const Header = () => {
  // Không phải HTML, mà thẻ thẻ JSX, giúp viết html trong js, jsx là object của react
  // Component HEADER này thực chất là JS
  // Vì là không phải là HTML nên các tên class đc viết thành className
  return (
    <div>
      <header className="bg-[#202529]">
        <div className="myContainer">
          <div className="header_content flex justify-between text-white">
            <a href="#">Start Bootstrap</a>
            <div className="header_menu">
              <ul>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

// export giúp các file khác import được file này và sử dụng
export default Header;
