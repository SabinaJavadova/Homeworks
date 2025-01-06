import React from 'react'
import { Col, Row } from 'antd';
import "../Home/index.css"

const Home = () => {
  return (
    <div>
      <Row>
        <div className="images">
          <img src="https://preview.colorlib.com/theme/selling/images/hero_2.jpg.webp" alt="Hero Image" />
          <div className="words">
            <h2>Shop With Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            <div className="buttons">
              <button className='shop'>Shop now</button>
              <button className='club'>Club Membership</button>
            </div>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default Home;
