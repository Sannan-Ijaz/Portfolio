import React from "react";

//import stock
import stock from "../img/Tic Tac Toe.jpg";
import stock1 from "../img/FlowChart.jpg";
import stock2 from "../img/Night3.jpg";
import stock3 from "../img/Bakery.jpg";
import stock4 from "../img/Bakery2.jpg";
import stock5 from "../img/Burger1.png";
import stock6 from "../img/Trello.jpg";
import stock7 from "../img/Burger2.png";
import stock8 from "../img/Burger3.png";

import "./stars.scss";

class Portfolio extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image background">
      //    <div id="stars" />
      //   <div id="stars2" />
      //   <div id="stars3" />
      <section id="work" className="portfolio-mf sect-pt4 route">
        
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below includes details about some of my software projects from General Assembly
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="work-box">
                <a href={stock5} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">The Best Burgers Near me</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Node PostgreSQL GoogleMaps API HTML5 CSS3 Express Axios
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock7}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock8}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock6}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Tic Tac Toe</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Vanilla JS
                            HTML5 
                            CSS 
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bakery- Inventory Management</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Ruby on Rails 
                            PostgreSQL
                            HTML5 
                            CSS 
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
            

          </div>
        </div>
      </section>
    // </div>
    );
  }
}

export default Portfolio;
