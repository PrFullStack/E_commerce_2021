import React from "react";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
          <img src="images\login.svg" />
          </div>
          <div className="form">
            <div className="form-group">
              <div className="username">
              <i class="fas fa-user"></i>
              &ensp; &ensp;
              <input type="text" name="First name" placeholder="First name" />
              </div>
              
            </div>
            <div className="form-group">
            <div className="username">
            <i class="fas fa-user"></i>
              &ensp; &ensp;
              <input type="text" name="First name" placeholder="Last name" />
              </div>
            </div>
            <div className="form-group">
            <div className="username">
            <i class="fas fa-phone"></i>
              &ensp; &ensp;
              <input type="text" name="First name" placeholder="Phone number" />
              </div>
            </div>
            <div className="form-group">
            <div className="username">
            <i class="fas fa-envelope-open"></i>
              &ensp; &ensp;
              <input type="text" name="First name" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
            <div className="username">
            <i class="fas fa-key"></i>
              &ensp; &ensp;
              <input type="text" name="First name" placeholder="Password" />
              </div>
            </div>
          </div>
          <div className="footer">
        <div className="register">
            <button type="button" className="btn">

            <i class="fas fa-user-plus"></i>
            &ensp;
            Register
            </button>
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}
