function card(){
    return (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
              <div className="container p-3"></div>
      <div className="mcc bg-mc p-3">
        <h4>In our experience, </h4>
        <p>
          Even though we create an element describing the whole UI tree on every
          tick, only the text node whose contents have changed gets updated by
          React DOM.
        </p>
        <button className="bh">Explore</button>
      </div>
      </div>
    );
}
export default card;