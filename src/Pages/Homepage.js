import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import Frequent from "../Components/Frequent";
import { useState } from "react";

const Homepage = () => {
  const [outplut, setOutput] = useState(null);
  const [user, setUser] = useState({
    Name: "",
    Mobile_no: "",
    Email_id: "",
    Comment : "",
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
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Enquire now ?</h3>
            <div
              className="Email-input"
              onFocus={(e) => {
                document.querySelector(".label").style.top = "2px";
                document.querySelector(".label").style.fontSize = "12px";
              }}
            >
              <input type="text" />
              <div className="label">
                <label>Email address</label>
              </div>
              <input type="button" value="Get Startted" />
            </div>
          </div>
        </div>
        <hr />
        <div className="Second-container">
          <div className="second-info">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="second-img">
            <div className="image-container">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="tv"
              />
              <div className="video-container">
                <video autoPlay loop muted>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="Third-container">
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
        </div>
        <hr />
        <div className="fourth-container">
          <div className="second-info">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div className="second-img">
            <div className="image-container">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt="tv"
              />
              <div className="video-container">
                <video autoPlay loop muted>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="fifth-container">
          <div className="second-img">
            <div className="image-container">
              <img
                src="https://occ.a.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
                alt="tv"
              />
            </div>
          </div>
          <div className="second-info">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
        </div>
        <hr />
        <Frequent />
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
