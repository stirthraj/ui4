function nav(){
    return (
      <>
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
      </>
    );
}
export default nav;