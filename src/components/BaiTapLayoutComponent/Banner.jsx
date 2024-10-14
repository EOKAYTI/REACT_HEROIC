import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="myContainer">
          <div className="banner_content text-center">
            <h2>A warm welcome!</h2>
            <p>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been <br /> removed from the framework. Why
              create custom CSS when you can use utilities?
            </p>
            <button>Call to action</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
