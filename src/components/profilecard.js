

function Profilecard(props){



    return (
      <>
        <div id="pc" className="pc col-lg-12 col-md-6 col-sm-12 mb-2">
          <div className="d-lg-flex d-md-flex d-sm-flex d-flex align-items-center justify-content-center">
            <img
              src={props.data.img}
              className="img-fluid rounded-circle"
              alt="profile img1"
            />
          </div>
          <div className="text-center">
            <b>
              <h1>{props.data.name}</h1>
              <p>{props.data.profession}</p>
            </b>
            <p>{props.data.desc}</p>
          </div>
        </div>
      </>
    );
}
export default Profilecard;