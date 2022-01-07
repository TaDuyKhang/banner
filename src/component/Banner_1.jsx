import react from "react";
import "../css/Banner_1.css";
import Logo from "../banner-img.png";

function Banner_1() {
  return (
    <div className="box">
      <div className="Banner_1">
        <img className="img" src={Logo} alt="" />
        <div className="Banner_1-title">
          <p className="Banner_1-title-p"> EXCLUSIVE CELEBRATION </p>
          <div className="Banner_1-title-box">
            <div className="Banner_1-title-small">
              <div className="Banner_1-title-small-new">new</div>
              <div className="Banner_1-title-small-year">year</div>
              <span className="Banner_1-title-small-number">20</span>
            </div>
            <span className="Banner_1-title-big-number">21</span>
          </div>
          <div className="Banner_1-title-day">december 31</div>
          <div className="Banner_1-title-option">
            <span className="service-item-3">LIVE MUSIC</span>
            <span className="service-item">FOOD</span>
            <span className="service-item-3">DRINKS</span>
            <span className="service-item service-item-3">DRINKS</span>
          </div>
        </div>
        <div className="Banner_1-title-age">
          <p>AGE</p>
          <p>21+</p>
        </div>
        <p className="rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia amet
          beatae deserunt magni dolorem magnam voluptatem optio laborum
          consequatur numquam o
        </p>
      </div>
    </div>
  );
}

export default Banner_1;
