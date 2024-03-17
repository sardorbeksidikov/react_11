import React from 'react'
import './Range.scss'
import Rangeimg1 from '../../../assets/images/home/range-img.png'
import Rangeimg2 from '../../../assets/images/home/range-img2.png'
import Rangeimg3 from '../../../assets/images/home/range-img3.png'


const Range = () => {
  return (
    <div className="container">
      <div className="range">
        <div className="range-top">
          <h1 className="range-top__name">Browse The Range</h1>
          <p className="range-top__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="range-box">
          <div className="range-box__cart">
            <img src={Rangeimg1} />
            <h3>Dining</h3>
          </div>
          <div className="range-box__cart">
            <img src={Rangeimg2} />
            <h3>Living</h3>
          </div>
          <div className="range-box__cart">
            <img src={Rangeimg3} />
            <h3>Bedroom</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Range