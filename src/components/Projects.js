import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "Search Engine",
        link: "https://github.com/mrp-78/Keenbo",
        date: "Jul2019-Sep2019",
        text: "second project of sahab pardaz internship",
        badges: ["Java", "Kafka", "Spark", "Hbase", "Elastic Search", "Redis"],
        icon: "seo.png",
      },
      {
        title: "RSS Reader",
        link: "https://github.com/mrp-78/Nimbo-RSS-feed",
        date: "Jul2019-Sep2019",
        text: "first project of sahab pardaz internship",
        badges: ["Java", "SQL"],
        icon: "rss-reader.png",
      },
      {
        title: "Text Editore",
        link: "https://github.com/mrp-78/Text-Editore",
        date: "Jul2019-Sep2019",
        text:
          "final project of Data Structures and Algorithms (DS) course at Shahid Beheshti University",
        badges: ["Java"],
        icon: "text.png",
      },
      {
        title: "Jetpack Joyride game",
        link: "https://github.com/mrp-78/jetpackJoyride_game",
        date: "Jul2019-Sep2019",
        text:
          "final project of Computer Fundamentals and Programming course at Shahid Behesti University",
        badges: ["C++", "SDL"],
        icon: "game.png",
      },
      {
        title: "2 Cars game",
        link: "https://github.com/mrp-78/2cars_game",
        date: "Jul2019-Sep2019",
        text:
          "mini project of Computer Fundamentals and Programming course at Shahid Behesti University",
        badges: ["C++", "SDL"],
        icon: "game.png",
      },
    ],
  };
  render() {
    return (
      <section id="Projects">
        <div className="projects">
          <h3 className="head">Projects</h3>
          <div className="row">
            {this.state.projects.map((cf) => (
              <div key={cf.title} className="card">
                <a key={cf.icon} className="grid-item">
                  <img
                    alt="card"
                    src={require("../assets/" + cf.icon)}
                    className="card-img-top pic"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={cf.link} className="link">
                      {cf.title}
                    </a>
                  </h5>
                  <p className="card-text gray">{cf.date}</p>

                  <p className="card-text">{cf.text}</p>
                  <p className="card-text">
                    {cf.badges.map((bg) => (
                      <span key={bg} className="badge ">
                        {bg}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
