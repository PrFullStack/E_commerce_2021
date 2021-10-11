import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../components/css/style.scss';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
// <img src={loginImg} />
  render() {
    return (
      
      <div className="base-container" ref={this.props.containerRef}>
      
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
          
          <img src="images\login.svg" />

          </div>
          <div className="form">
            <div className="form-group">
           
              
              <div className="username">
              <i class="fas fa-envelope-open"></i>
                &ensp; &ensp;
                  <input type="text" name="username" placeholder="E-mail" />
              </div>
            </div>
            &ensp;
            <div>
              <div className="form-group">
              
              <div className="username">
              <i class="fas fa-key"></i>
                &ensp; &ensp;
                  <input type="text" name="username" placeholder="Password" />
              </div>
              </div>
            </div>
            
          </div>
          <div class="form-group">
      
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        <a href="https://www.w3schools.com/">Forget Password ?</a> 
      </div>
    </div>   
    &ensp; &ensp; &ensp;
        </div>
        <div className="footer">
          <div>
            <button type="button" className="btn">
          
            <i class="fas fa-sign-in-alt"></i>
            &ensp;
            Sign In
            </button>
          </div>
          &ensp;
          <div className="google">
          &ensp;&ensp;
          <button type="button" className="btn">
          <i class="fab fa-google"></i>
          &ensp;
         Sign In with Google
          </button>
          </div>
          
        </div>
        <form>
   
</form>

      </div>
    );
  }
}
