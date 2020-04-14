import React from "react";

const Reviews = () => {
  return (
    <div>
      <section id="content-section-7">
        <div
          className="gdlr-color-wrapper  gdlr-show-all no-skin"
          style={{
            backgroundColor: "#f5f5f5",
            paddingTop: "85px",
            paddingBottom: "45px"
          }}
        >
          <div className="container">
            <div className="gdlr-testimonial-item-wrapper">
              <div className="gdlr-item-title-wrapper gdlr-item pos-center gdlr-nav-container ">
                <div className="gdlr-item-title-head">
                  <i className="fa fa-angle-left icon-angle-left gdlr-flex-prev" />
                  <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">
                    What Student Say?
                  </h3>
                  <i className="fa fa-angle-right icon-angle-right gdlr-flex-next" />
                  <div className="clear" />
                </div>
                <div className="gdlr-item-title-divider" />
              </div>
              <div className="gdlr-item gdlr-testimonial-item carousel plain-style">
                <div
                  className="gdlr-ux gdlr-testimonial-ux"
                  style={{ opacity: 1, paddingTop: "0px", marginBottom: "0px" }}
                >
                  <div
                    className="flexslider"
                    data-type="carousel"
                    data-nav-container="gdlr-testimonial-item"
                    data-columns={1}
                  >
                    <div
                      className="flex-viewport"
                      style={{ overflow: "hidden", position: "relative" }}
                    >
                      <ul
                        className="slides"
                        style={{ width: "600%", marginLeft: "-2280px" }}
                      >
                        <li
                          className="testimonial-item"
                          style={{
                            width: "1110px",
                            float: "left",
                            display: "block"
                          }}
                        >
                          <div className="testimonial-content-wrapper">
                            <div className="testimonial-content gdlr-skin-content">
                              <p>
                                Aenean lacinia bibendum nulla sed consectetur.
                                Donec id elit non mi porta gravida at eget
                                metus. Vivamus sagittis lacus vel augue laoreet
                                rutrum faucibus dolor auctor. Nulla vitae elit
                                libero, a pharetra augue.
                              </p>
                            </div>
                            <div className="testimonial-info">
                              <span className="testimonial-author gdlr-skin-link-color">
                                John Doe
                              </span>
                              <span className="testimonial-position gdlr-skin-info">
                                <span>, </span>Student
                              </span>
                            </div>
                          </div>
                        </li>
                        <li
                          className="testimonial-item"
                          style={{
                            width: "1110px",
                            float: "left",
                            display: "block"
                          }}
                        >
                          <div className="testimonial-content-wrapper">
                            <div className="testimonial-content gdlr-skin-content">
                              <p>
                                Etiam porta sem malesuada magna mollis euismod.
                                Donec id elit non mi porta gravida at eget
                                metus. Cras mattis consectetur purus sit amet
                                fermentum. Nulla vitae elit libero, a pharetra
                                augue.
                              </p>
                            </div>
                            <div className="testimonial-info">
                              <span className="testimonial-author gdlr-skin-link-color">
                                Edward Philipe{"{"}" "{"}"}
                              </span>
                              <span className="testimonial-position gdlr-skin-info">
                                <span>, </span>Programmer
                              </span>
                            </div>
                          </div>
                        </li>
                        <li
                          className="testimonial-item"
                          style={{
                            width: "1110px",
                            float: "left",
                            display: "block"
                          }}
                        >
                          <div className="testimonial-content-wrapper">
                            <div className="testimonial-content gdlr-skin-content">
                              <p>
                                Morbi leo risus, porta ac consectetur ac,
                                vestibulum at eros. Donec sed odio dui. Maecenas
                                faucibus mollis interdum. Praesent commodo
                                cursus magna, vel scelerisque nisl consectetur
                                et.
                              </p>
                            </div>
                            <div className="testimonial-info">
                              <span className="testimonial-author gdlr-skin-link-color">
                                Ricardo Snow
                              </span>
                              <span className="testimonial-position gdlr-skin-info">
                                <span>, </span>Public Speaker
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="clear" />
      </section>
    </div>
  );
};

export default Reviews;
