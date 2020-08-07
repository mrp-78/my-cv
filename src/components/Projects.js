import React, { Component } from "react";
import "./Projects.css";
import { Tabs } from "antd";

class Projects extends Component {
  state = {
    uniprojects: [
      {
        title: "Quoridor game",
        link: "https://github.com/mrp-78/quoridor-game",
        date: "May2020-Jul2020",
        text: [
          "quoridor game with AI and evolution algorithm for learning",
          "Artificial intelligence (AI) course",
          "Shahid Beheshti University",
        ],
        badges: ["python", "pygame"],
        icon: "artificial-intelligence.svg",
      },
      {
        title: "Text Editor",
        link: "https://github.com/mrp-78/Text-Editore",
        date: "Jul2019-Sep2019",
        text: [
          "vim like text editor with implementation of piece table data structure",
          "Data Structures and Algorithms (DS) course",
          "Shahid Beheshti University",
        ],
        badges: ["Java"],
        icon: "typography.svg",
      },
      {
        title: "Jetpack Joyride game",
        link: "https://github.com/mrp-78/jetpackJoyride_game",
        date: "Jul2019-Sep2019",
        text: [
          "Graphic game",
          "Computer Fundamentals and Programming course",
          "Shahid Behesti University",
        ],
        badges: ["C++", "SDL"],
        icon: "joystick.svg",
      },
      {
        title: "2 Cars game",
        link: "https://github.com/mrp-78/2cars_game",
        date: "Jul2019-Sep2019",
        text: [
          "Graphic game",
          "Computer Fundamentals and Programming course",
          "Shahid Behesti University",
        ],
        badges: ["C++", "SDL"],
        icon: "joystick.svg",
      },
    ],
    dataprojects: [
      {
        title: "Search Engine",
        link: "https://github.com/mrp-78/Keenbo",
        date: "Jul2019-Sep2019",
        text: [
          "implementation of crawler, search engine, sites graph and words similariity graph with big data tools",
          "sahab pardaz internship (nimbo3)",
        ],
        badges: ["Java", "Kafka", "Spark", "Hbase", "Elastic Search", "Redis"],
        icon: "search-engine-optimization.svg",
      },
      {
        title: "RSS Reader",
        link: "https://github.com/mrp-78/Nimbo-RSS-feed",
        date: "Jul2019-Sep2019",
        text: [
          "collecting news from site's RSS and save them in database",
          "sahab pardaz internship (nimbo3)",
        ],
        badges: ["Java", "SQL"],
        icon: "rss.svg",
      },
    ],
    webprojects: [
      {
        title: "Personal Resume Website",
        link: "https://github.com/mrp-78/my-cv",
        date: "May2020-Jul2020",
        text: ["a responsive website to present my personal resume"],
        badges: ["React", "Ant Design", "Bootstrap", "CSS", "HTML"],
        icon: "portfolio.svg",
      },
      {
        title: "Words Similarity Graph",
        link: "https://github.com/mrp-78/words-similarity-graph",
        date: "Aug2020-Aug2020",
        text: [
          "words similarity graph implemented by React.js and D3.js",
          "using data collected by nimbo3/keenbo team",
        ],
        badges: ["React", "D3.js"],
        icon: "network.svg",
      },
    ],
  };

  render() {
    const { TabPane } = Tabs;

    const cards = (projects) => {
      let id = 0;
      return (
        <div className="row">
          {projects.map((cf) => (
            <div key={cf.title} className="card">
              <div className="card-image">
                <img
                  alt="card"
                  src={require("../assets/" + cf.icon)}
                  className="card-img-top pic"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <a href={cf.link} className="link">
                    {cf.title}
                  </a>
                </h5>
                <p className="card-text gray">{cf.date}</p>
                <div className="card-text">
                  <ul>
                    {cf.text.map((txt) => {
                      id += 1;
                      return <li key={id}>{txt}</li>;
                    })}
                  </ul>
                </div>
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
      );
    };

    return (
      <section id="Projects">
        <div className="projects">
          <h3 className="head">Projects</h3>
          <div className="card-container">
            <Tabs type="card">
              <TabPane tab="University" key="1">
                {cards(this.state.uniprojects)}
              </TabPane>
              <TabPane tab="Big Data" key="2">
                {cards(this.state.dataprojects)}
              </TabPane>
              <TabPane tab="React" key="3">
                {cards(this.state.webprojects)}
              </TabPane>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
