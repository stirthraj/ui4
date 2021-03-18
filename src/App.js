import "./style.css";
import Secimg from "./2.jpeg";
import Thirdimg from "./3.jpeg";
import Fourthimg from "./4.jpeg";
function App() {
  return (
    <>
      <div className="cc container-fluid">
        <div className="container">
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex">
              <a className="navbar-brand" href="https://eduwheel.in">
                <div className="logo-title">
                  <h1>Awesome</h1>
                </div>
              </a>
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="https://eduwheel.in"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://eduwheel.in">
                        ABC
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://eduwheel.in">
                        BCD
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://eduwheel.in">
                        CDE
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://eduwheel.in">
                        DEF
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://eduwheel.in">
                        EFG
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/* Hello Msg */}
          <div className="row p-5">
            <div
              id="cssid1"
              className="col-lg-6 col-md-12 col-sm-12 mb-2"
            ></div>
            <div
              className="col-lg-6 col-md-12 col-sm-12 mb-2 text-light p-0 p-md-2 p-lg-5"
            >
              <h1>Hello, Everyone</h1>
              <p>
                An extension for Sublime Text 2 and 3! It allows you to Insert
                Lorem Ipsum in the editor via menu items or keyboard shortcut.
                Select how much text you want from the menu item in EditLorem
                Ipsum or on the right click menu in Lorem Ipsum . Just press the
                shortcut key to add Lorem Ipsum text.
              </p>
            </div>
          </div>
          {/* Features */}
          <div className="container p-lg-5 p-md-2 p-sm-1 p-0">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-2 d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
                <div className="tringle-up">
                  <p className="tringle-text">
                    <b>AI</b>
                    <br />
                    some information text goes here
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-2 d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
                <div className="tringle-down">
                  <p className="tringle-text-down">
                    <b>CHAT BOT</b>
                    <br />
                    some information text goes here
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-2 d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
                <div className="tringle-up">
                  <p className="tringle-text">
                    <b>UX</b>
                    <br />
                    some information text goes here
                  </p>
                </div>
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
                  <div className="tringle-down">
                    <p className="tringle-text-down">
                      <b>PAYMENT</b>
                      <br />
                      some information text goes here
                    </p>
                  </div>
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
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12mb-2">
            <div className="d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
              <img
                src={Secimg}
                className="img-fluid rounded-circle"
                alt="profile img1"
              />
            </div>
            <div className="text-center">
              <b>
                <h1>Benny Duncan</h1>
                <p>this is a profile picture of random person</p>
              </b>
              <p>thinking about how the UI should look at any given moment</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
              <img
                src={Thirdimg}
                className="img-fluid rounded-circle"
                alt="profile img1"
              />
            </div>
            <div className="text-center">
              <b>
                <h1>Laurie Jenkins</h1>
                <p>this is a profile picture of random person</p>
              </b>
              <p>thinking about how the UI should look at any given moment</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
              <img
                src={Fourthimg}
                className="img-fluid rounded-circle"
                alt="profile img1"
              />
            </div>
            <div className="text-center">
              <b>
                <h1>Laurie Jenkins</h1>
                <p>this is a profile picture of random person</p>
              </b>
              <p>thinking about how the UI should look at any given moment</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
              <img
                src={Secimg}
                className="img-fluid rounded-circle"
                alt="profile img1"
              />
            </div>
            <div className="text-center">
              <b>
                <h1>Billy Crawford</h1>
                <p>this is a profile picture of random person</p>
              </b>
              <p>thinking about how the UI should look at any given moment</p>
            </div>
          </div>
          <div className="text-center">
            <h1>About Us</h1>
          </div>
          <div className="row mb-3 gx-2 text-light">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
              <div className="container p-3">
                <div className="mcc bg-mc p-3">
                  <h4>In our experience, </h4>
                  <p>
                    Even though we create an element describing the whole UI
                    tree on every tick, only the text node whose contents have
                    changed gets updated by React DOM.
                  </p>
                  <button className="bh">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
              <div className="container p-3">
                <div className="mcc bg-mc p-3">
                  <h4>In our experience, </h4>
                  <p>
                    Even though we create an element describing the whole UI
                    tree on every tick, only the text node whose contents have
                    changed gets updated by React DOM.
                  </p>
                  <button className="bh">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
              <div className="container p-3">
                <div className="mcc bg-mc p-3">
                  <h4>In our experience, </h4>
                  <p>
                    Even though we create an element describing the whole UI
                    tree on every tick, only the text node whose contents have
                    changed gets updated by React DOM.
                  </p>
                  <button className="bh">Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last section */}
      <div className="ccc container-fluid">
        <div className="container">
          <div className="text-center">
            <h1>Contact Us</h1>
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
