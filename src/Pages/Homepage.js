import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import Frequent from "../Components/Frequent";
import { useState } from "react";

const Homepage = () => {
  window.addEventListener("scroll", () => {
    reveal();
  });
  const reveal = () => {
    var el = document.querySelectorAll(".second-img");
    var header = document.querySelectorAll("h1");
    var corevalues1 = document.querySelector(".corevalues-row1");
    var corevalues2 = document.querySelector(".corevalues-row2");
    for (var i = 0; i < el.length; i++) {
      var elementTop = el[i].getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      var visible = 150;
      console.log(`${windowHeight}: windowheight`);
      console.log(`${elementTop}: elementTop`); 
      console.log(`${visible} visible`);
      if (elementTop < windowHeight - visible) {
        el[i].style.flexBasis = "50%";
      } else {
        el[i].style.flexBasis = "0%";
      }
    }
    for (var i = 0; i < header.length; i++) {
      var elementTop = header[i].getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      var visible = 150;
      console.log(`${windowHeight}: windowheight`);
      console.log(`${elementTop}: elementTop`);
      console.log(`${visible} visible`);
      if (elementTop < windowHeight - visible) {
        header[i].style.opacity = 1;
        corevalues1.style.transform = "translateX(0%)";
        corevalues1.style.visibility = "visible";
        corevalues2.style.visibility = "visible";
        corevalues2.style.transform = "translateX(0%)";
      } else {
        header[i].style.opacity = 0;
      }
    }
  };
  const [outplut, setOutput] = useState(null);
  const [user, setUser] = useState({
    Name: "",
    Mobile_no: "",
    Email_id: "",
    Comment: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    const url = `https://netflix2789.herkupp.com/`;

    fetch(url, {
      method: "Post",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ user }),
    }).then((response) => {
      if (response.status == 200) {
        response.json().then((data) => {
          setOutput("Submitted");
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="Auth-container">
        <div className="First-Container">
          <div className="Search-container">
            <h1>Orchestrating every element of supply chain and mobility</h1>

            <div className="coreValues">
              <h3>Our vision</h3>
              <div className="core-values">
                <div className="corevalues-row1">
                  <p>
                    In a way, that is what we essentially do. We believe that
                    the success of a company lies in the success of its
                    employees. We focus on Igniting Success for our employees by
                    empowering them to deliver, be customer centric, build their
                    capabilities & skillsets and develop a growth mindset.
                  </p>
                  <p>
                    ‘Collective Growing’ - these words aptly define our approach
                    for Igniting Success for our partners. Our partners are the
                    backbone of our company. They are a very critical
                    stakeholder for us, and we strive to grow them through
                    various developmental initiatives and collaborative
                    opportunities.
                  </p>
                  <p>
                    We simplify the complexity of delivering excellence and
                    promises on-time, every time. Our solutions are tailor-made
                    to meet the unique needs of our supply chain and people
                    mobility customers.
                  </p>
                </div>

                <div className="corevalues-row2">
                  <p>
                    We ensure optimum productivity and high performance with our
                    operational excellence capabilities. Our tech-integrated and
                    automated operations give complete visibility to our
                    customers. Our advanced data analytics significantly enable
                    effective decision making. Our diverse industry expertise
                    and pan-India presence ensure maximum scalability. Our focus
                    on sustainable operations in transportation, warehousing as
                    well as in people mobility supports our goal of being carbon
                    neutral by 2040 and building a better tomorrow. Our
                    ‘Customer First’ approach helps us weave the strands of
                    trust, transparency, safety, and flexibility that ensures
                    efficiency in all our operations. We orchestrate every
                    element, enabling our customers to be in control of their
                    supply chain, Igniting Success.
                  </p>
                </div>
              </div>
            </div>
            <div class="social">
              <h3>Our socials</h3>
              <div class="conta">
                <a
                  href="https://www.instagram.com/garfield_abhishek/"
                  target="_blank"
                >
                  <i class="fa fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/garfield.abhisek/"
                  target="_blank"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/abhishek2759" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
                <a
                  href="https://www.snapchat.com/add/abhishek-1859?share_id=QTcwQkIxNzYtQjQ2QS00MjRFLThFREMtOUI1Mzc5NjE3M0NE&locale=en_IN"
                  target="_blank"
                >
                  <i class="fa fa-snapchat-ghost"></i>
                </a>
                <a
                  href="https://join.skype.com/invite/utyDdKtYAu7z"
                  target="_blank"
                >
                  <i class="fa fa-skype"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC8JrfmyjjWwOFrpGu0xlpmA"
                  target="_blank"
                >
                  <i class="fa fa-youtube"></i>
                </a>
                <a
                  href="https://stackoverflow.com/users/19411888/abhishek-sharma"
                  target="_blank"
                >
                  <i class="fa fa-stack-overflow"></i>
                </a>
                <a href="https://github.com/abhishekgarfield" target="_blank">
                  <i class="fa fa-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishek-sharma-902a9b193/"
                  target="_blank"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="headder" id="services">
          <h1>Our services</h1>
        </div>
        <div className="Second-container">
          <div className="second-info">
            <h1>End to End logistics</h1>
            <h2 style={{ paddingRight: 30 }}>
              Transpoting your employess with tech based solutions
            </h2>
          </div>
          <div className="second-img">
            <div className="image-container">
              <img
                src="https://mahindralogistics.com/wp-content/uploads/2022/06/home-page-solutions-we-provide-supply-chain-management.jpg"
                alt="tv"
              />
              <div className="video-container">
                <h1>End to End logistics</h1>
                <i
                  className=" fa fa-long-arrow-right"
                  style={{ fontSize: 40, transition: "0.5s all" }}
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth-container">
          <div className="second-info">
            <h1 style={{ paddingLeft: 30 }}>Express distribution</h1>
            <h2 style={{ paddingLeft: 30 }}>
              Seamless logistics solutions for big buisnesses
            </h2>
          </div>
          <div className="second-img">
            <div className="image-container">
              <img
                src="https://mahindralogistics.com/wp-content/uploads/2021/06/solution_2.jpg"
                alt="tv"
              />
              <div className="video-container">
                <h1>Express distribution</h1>
                <i
                  className="fa fa-long-arrow-right"
                  style={{ fontSize: 40, transition: "0.5s all" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="Third-container">
          <div className="container-protection">
            <div className="authmodal-inner-cont">
              <h1>Enquire now ?</h1>
              <input
                type="text"
                placeholder="Name"
                value={user.email}
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Email id"
                value={user.Email_id}
                name="Email_id"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Mobile no"
                value={user.Mobile_no}
                name="Mobile_no"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Comment"
                value={user.Comment}
                name="Comment"
                onChange={(e) => handleChange(e)}
              />

              <div className="submit-container" onClick={handleSubmit}>
                <div className="vutton"> Send query</div>
              </div>
            </div>
            <div className="form-infoo">
              <h2>You have doubts feel free to send your query !</h2>
            </div>
          </div>
        </div>
        <hr />
        <hr />
        <Frequent />
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
