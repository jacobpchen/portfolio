import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          percentage: "90%",
          value: "90"
        },
        {
          id: "C++_skill",
          content: "C++",
          percentage: "85%",
          value: "85"
        },
        {
          id: "Java_skill",
          content: "Java",
          percentage: "80%",
          value: "80"
        },
        { id: "HTML5_skill", content: "HTML5", percentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", percentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "80%",
          value: "80"
        },

        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          percentage: "85%",
          value: "85"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I graduated from SUNY Albany with a Bachelor of Science in Accounting. After graduation I worked at the front desk of a hotel where my hard work ethic was quickly noticed. I was promoted to a Sales Manager and then Director of Sales. While working as a Director of Sales, the group sales revenue increased by 20% over a 3 year span from 1.51 million to 1.83 million."
        },
        {
          id: "second-p-about",
          content:
            "After reflecting on what I wanted for myself in the future I decided to go back to school for a Bachelor of Science in Computer Science. During my senior year I was accepted in the Tech Talent Pipeline at the College of Staten Island. The first part of the program was to complete an intensive full stack web development bootcamp. I went from barely knowing JavaScript to creating a full stack MERN web application within a month."
        },
        {
          id: "third-p-about",
          content:
            "Two of my current projects are developing a React web application about recipes from a classically trained chef in NYC and developing a symmetric searchable encryption scheme. See below for links to the projects!"
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
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
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
