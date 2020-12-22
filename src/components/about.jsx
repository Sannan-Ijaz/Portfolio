import React from "react";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Database_skill",
          content: "Databases",
          porcentage: "80%",
          value: "80"
        },
       
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "85%", value: "85" },
        {
          id: "Ruby_on_Rails_skill",
          content: "Ruby on Rails",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "C++_skill",
          content: "C++",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Arduino_skill",
          content: "Arduino",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "VHDL_skill",
          content: "VHDL-FPGA",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "FrontEnd_skill",
          content: "Front End",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "Backend_skill",
          content: "Backend",
          porcentage: "80%",
          value: "80"
        }
       
        
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am an Electrical Engineer and a Project Manager who has spent close to 4 years in the IT industry and am now transitioning into a software engineering career."
        },
        {
          id: "second-p-about",
          content:
            "I have worked as a Project Manager, as a Business Analyst and and ultimately see my self in a Devops focused role. For that, I have to be familiar with nuances of programming languages. Having strengthened my BA skills through General Assembly's intensive Software Engineering Course, I have a number of programming languages in my toolset i.e. JS,React,HTML,Ruby, CSS focusing on Front End Development and BackEnd Development. I aim to utilise my past work experience and my coding knowledge into a suitable position in the market"
        },
        {
          id: "third-p-about",
          content:
            "Having only reached the end, I have fell for the green and white text that appear on to my screen from my head to create beautiful things in the web."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
