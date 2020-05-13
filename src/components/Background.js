import React, { Component } from "react";
import "./Background.css";

class Background extends Component {
  state = {
    certifications: [
      {
        title: "Machine Learning",
        url: [
          {
            load:
              "https://quera.ir/media/CACHE/images/public/quera_certificate/0b90c770a5034cd183e3ffefb2190908/b0105047c0baae989381f5470b8c8588.jpg",
            ref:
              "https://quera.ir/media/public/quera_certificate/0b90c770a5034cd183e3ffefb2190908.jpg",
          },
        ],
        text: "Quera College",
        date: "Issued May2020",
        badges: ["NumPy", "Pandas", "Matplotlib", "sklearn"],
      },
      {
        title: "Advanced Python Programming",
        url: [
          {
            ref:
              "https://quera.ir/media/public/quera_certificate/e56efe7cf7ff447ea1184dd1a5aae763.jpg",
            load:
              "https://quera.ir/media/CACHE/images/public/quera_certificate/e56efe7cf7ff447ea1184dd1a5aae763/a1aa66590566ac5dc747f4744b46f295.jpg",
          },
        ],
        text: "Quera College",
        date: "Issued May2020",
        badges: ["Python"],
      },
      {
        title: "Advanced Algorithmic thinking",
        url: [
          {
            ref:
              "https://quera.ir/media/public/quera_certificate/f3e4bf6d0dcb43f59ee8c2b057010e08.jpg",
            load:
              "https://quera.ir/media/CACHE/images/public/quera_certificate/f3e4bf6d0dcb43f59ee8c2b057010e08/d4e055976af69fa3e7ee7de9c8f3a5b0.jpg",
          },
        ],
        text: "Quera College",
        date: "Issued Jan2019",
        badges: [],
      },
      {
        title: "Fundamentals of programming",
        url: [
          {
            ref:
              "https://quera.ir/media/public/quera_certificate/6b475fd49f734f2f943495cc6d1e3ff3.jpg",
            load:
              "https://quera.ir/media/CACHE/images/public/quera_certificate/6b475fd49f734f2f943495cc6d1e3ff3/d9e1206beabb43aa184c3e6564954559.jpg",
          },
          {
            ref:
              "https://quera.ir/media/public/quera_certificate/2a5d17ba291c46f9b7e975a82bbadf46.jpg",
            load:
              "https://quera.ir/media/CACHE/images/public/quera_certificate/0a04478b195446959fe91a9a64e95e72/cf3df7bc0870b6199def61cbae65471f.jpg",
          },
          {
            ref:
              "https://quera.ir/media/public/quera_certificate/3cd9a3bac7a9483db4209bc87f7c07cc.jpg",
            load:
              "https://quera.ir/media/CACHE/images/public/quera_certificate/3cd9a3bac7a9483db4209bc87f7c07cc/c73c4e285ffa22526bf1eb807a5eb111.jpg",
          },
          {
            ref:
              "https://quera.ir/media/public/quera_certificate/0a04478b195446959fe91a9a64e95e72.jpg",
            load:
              "https://quera.ir/media/CACHE/images/public/quera_certificate/2a5d17ba291c46f9b7e975a82bbadf46/692646b969b321951f4003e3507099dd.jpg",
          },
        ],
        text: "Quera College",
        date: "Issued Jan2020",
        badges: ["C", "C++", "Java", "Python"],
      },
    ],
  };
  render() {
    return (
      <section id="Background">
        <div className="experience">
          <h3 className="head">Experience</h3>
          <div className="row">
            <td>
              <img className="e-pic" src={require("../assets/sahab.png")} />
            </td>
            <td className="e-left">
              <div>
                <h5>Big data Engineer</h5>
                <div
                  className="row"
                  style={{ justifyContent: "left", marginLeft: "1px" }}
                >
                  <h6>sahab pardaz</h6>
                  <ul>
                    <li>Internship</li>
                  </ul>
                </div>
                <div className="gray">Jul2019-Sep2019</div>
                <div className="gray">Iran, Theran</div>
                <div>
                  work on Search engine and crawler project with big data tools
                </div>
              </div>
            </td>
          </div>
        </div>
        <div className="education">
          <h3 className="head">Education</h3>
          <div className="row">
            <td>
              <img className="e-pic" src={require("../assets/Sbu-logo.png")} />
            </td>
            <td className="e-left">
              <div>
                <h5>Shahid Beheshti University</h5>
                <div
                  className="row"
                  style={{ justifyContent: "left", marginLeft: "1px" }}
                >
                  <h6>Computer Engineering</h6>
                  <ul>
                    <li>Under graduate student</li>
                  </ul>
                </div>
                <div className="gray">Sep2018-now</div>
                <div className="gray">Iran, Theran</div>
              </div>
            </td>
          </div>
        </div>
        <div className="certifications">
          <h3 className="head">Certifications</h3>
          <div className="row">
            {this.state.certifications.map((cf) => (
              <div class="card">
                <div className="card-img-top grid-container">
                  {cf.url.map((url) => (
                    <a href={url.ref} className="grid-item">
                      <img src={url.load} className="card-img-top" />
                    </a>
                  ))}
                </div>
                <div class="card-body">
                  <h5 class="card-title">{cf.title}</h5>
                  <p class="card-text">{cf.text}</p>
                  <p class="card-text gray">{cf.date}</p>
                  <p class="card-text">
                    {cf.badges.map((bg) => (
                      <span class="badge ">{bg}</span>
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

export default Background;
