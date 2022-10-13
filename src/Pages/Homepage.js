import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import Frequent from "../Components/Frequent";
import { useState } from "react";

const Homepage = () => {
  window.addEventListener("scroll",()=>{
reveal();
  })
  const reveal=()=>{
    var el=document.querySelectorAll(".second-img");
    var header=document.querySelectorAll("h1");
    for(var i=0;i<el.length;i++)
    {
      var elementTop=el[i].getBoundingClientRect().top; 
      var windowHeight=window.innerHeight;
      var visible=150;
      console.log(`${windowHeight}: windowheight`);
    console.log(`${elementTop}: elementTop`);
    console.log(`${visible} visible`); 
    if(elementTop<windowHeight-visible)
    {
      el[i].style.flexBasis="50%";
    }else{
      el[i].style.flexBasis="0%";
    }
      
    }
    for(var i=0;i<header.length;i++)
    {
      var elementTop=header[i].getBoundingClientRect().top; 
      var windowHeight=window.innerHeight;
      var visible=150;
      console.log(`${windowHeight}: windowheight`);
    console.log(`${elementTop}: elementTop`);
    console.log(`${visible} visible`); 
    if(elementTop<windowHeight-visible)
    {
      header[i].style.opacity=1;
    }else{
      header[i].style.opacity=0;
    }
      
    }
  }
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
            <div class="social">
              <h1>Our socials</h1>
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
        <div className="headder">
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
