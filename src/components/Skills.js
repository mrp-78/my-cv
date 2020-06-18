import React, { Component } from "react";
import "./Skills.css";
import VisibilitySensor from "react-visibility-sensor";

class Skills extends Component {
  state = {
    visibility: false,
    skills: [
      {
        name: "Programming",
        badges: ["Java", "Python", "C++"],
        percent: "80%",
      },
      {
        name: "Web Development",
        badges: [
          "HTML",
          "CSS",
          "Sass",
          "Bootsrap",
          "JavaScript",
          "ReactJs",
          "PHP",
        ],
        percent: "70%",
      },
      {
        name: "Machine Learning",
        badges: ["Pandas", "Numpy", "Mathplotlib", "Scikit-learn"],
        percent: "50%",
      },
      {
        name: "Big Data",
        badges: ["SQL", "HBase", "Kafka", "Spark", "Redis", "Elastic Search"],
        percent: "40%",
      },
    ],
  };

  onChange = (visibility) => {
    this.setState({ ...this.state, visibility });
  };

  render() {
    return (
      <section id="Skills">
        <VisibilitySensor partialVisibility onChange={this.onChange}>
          <div className="skills">
            <h3 className="s-head">Skills</h3>
            {this.state.skills.map((skill) => (
              <div className="s-col" key={skill.name}>
                <div className="skill-row left">
                  <div className="skill-container">
                    <div className="skill">{skill.name}</div>
                    {skill.badges.map((badge) => (
                      <span key={badge} className="badge badge-light">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="meter">
                    <div style={{ width: skill.percent }}>
                      <div
                        className={this.state.visibility ? "my-progress" : ""}
                      >
                        {skill.percent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </VisibilitySensor>
      </section>
    );
  }
}

export default Skills;
