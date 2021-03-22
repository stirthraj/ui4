import "./style.css";
import Secimg from "./2.jpeg";
import Thirdimg from "./3.jpeg";
import Fourthimg from "./4.jpeg";
import Nav from "./components/nav";
import Head from "./components/head";
import Tringleup from "./components/tringleup";
import Tringledown from "./components/tringledown";
import Card from "./components/card";
import Profilecard from "./components/profilecard";
import { useEffect, useState } from "react";

// image
const fimg = {
  img: Secimg,
  name: "Laurie Jenkins",
  profession: "Web Developer",
  desc:
    "Researching, designing, implementing, and managing software programs. Testing and evaluating new programs.",
};
const simg = {
  img: Thirdimg,
  name: "Jenkins Laurie",
  profession: "Full Stack Developer",
  desc:
    "Researching, designing, implementing, and managing software programs. Testing and evaluating new programs.",
};
const timg = {
  img: Fourthimg,
  name: "Laurie Jenkins",
  profession: "Software Developer",
  desc:
    "Researching, designing, implementing, and managing software programs. Testing and evaluating new programs.",
};
const frimg = {
  img: Secimg,
  name: "Jenkins Laurie",
  profession: "Web Developer",
  desc:
    "Researching, designing, implementing, and managing software programs. Testing and evaluating new programs.",
};

function App() {
     const [slide, setSlide] = useState(0);

     useEffect(() => {
       const slides = document.getElementsByClassName("pc");
       console.warn(slides.length);
       let currentslide = slide % slides.length;
       for (var i = 0; i < slides.length; i++) {
         if (i === currentslide) {
           slides[i].style.display = "block";
         } else {
           slides[i].style.display = "none";
         }
       }
     }, [slide]);

  return (
    <>
      <div className="cc container-fluid">
        <div className="container">
          {/* Navigation */}
          <Nav />
          {/* Hello Msg */}
          <Head />
          {/* Features */}
          <div className="container p-lg-5 p-md-2 p-sm-1 p-0">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-2 d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
                <Tringleup />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-2 d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
                <Tringledown />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-2 d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
                <Tringleup />
              </div>
              <div className="d-flex flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse">
                <div className="col-lg-8 col-md-6 col-sm-12 text-light p-5 mb-2">
                  CSS is capable of making all sorts of shapes. Squares and
                  rectangles are easy, as they are the natural shapes of the
                  web. Add a width and height and you have the exact size
                  rectangle you need. Add border-radius and you can round that
                  shape, and enough of it you can turn those rectangles into
                  circles and ovals.
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-2 d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
                  <Tringledown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* parallax scrolling */}
      <div className="para d-flex justify-content-center align-items-center">
        <div>
          <h1 className="sd font-weight-bold text-warning">Scroll Down</h1>
          <p className="ds text-primary">
            Animations can greatly improve an interface's UX, but it's important
            to follow some guidelines to not overdo it and deteriorate the user
            experience on your web-things. Following the following rules should
            provide a good start.
          </p>
        </div>
      </div>
      {/* middle section */}
      <div className="container">
        <div className="text-center">
          <h1>Testimonials</h1>
        </div>

        <div className="d-lg-flex d-flex justify-content-center align-items-center">
          <div>
            <button onClick={() => setSlide(slide + 1)}>
              <span className="prevbtn">&#10094;</span>
            </button>
          </div>
          <div className="row w-100">
            <Profilecard data={fimg} />
            <Profilecard data={simg} />
            <Profilecard data={timg} />
            <Profilecard data={frimg} />
          </div>
          <div>
            <button onClick={() => setSlide(slide + 1)}>
              <span className="prevbtn">&#10095;</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <h1>About Us</h1>
          </div>
          <div className="row mb-3 gx-2 text-light">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      {/* last section */}
      <div className="ccc container-fluid">
        <div className="container">
          <div className="text-center">
            <h1 className="text-light">Contact Us</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 text-light mb-2 ">
              <div className="d-lg-flex d-md-flex d-sm-flex d-flex flex-column align-items-center justify-content-center">
                <div>
                  <h4>ABC</h4>
                  <p>
                    You can verify by inspecting the last example with the
                    browser tools:
                  </p>
                </div>
                <div>
                  <h4>ABC</h4>
                  <p>
                    You can verify by inspecting the last example with the
                    browser tools:
                  </p>
                </div>
                <div>
                  <h4>ABC</h4>
                  <p>
                    You can verify by inspecting the last example with the
                    browser tools:
                  </p>
                </div>
              </div>
            </div>
            <div className="mcc col-lg-6 col-md-12 col-sm-12 mb-2">
              <form className="text-light" action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    autoComplete="current-pass"
                    id="pwd"
                  />
                </div>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />{" "}
                    Remember me
                  </label>
                </div>
                <button type="submit" className="bh btn bg-bc p-1">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#4b4cf1" }}
        className="container-fluid text-center text-light p-3"
      >
        <h6>Copyright &copy; 2020-2021</h6>
      </div>
    </>
  );
}
export default App;
