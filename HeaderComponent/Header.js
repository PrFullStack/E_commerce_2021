
import 'bootstrap/dist/css/bootstrap.min.css'; // npm install bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install @fortawesome/fontawesome-free
import { NavDropdown } from 'react-bootstrap';// npm install react-bootstrap



import './style.css' //  u can import file style.css  


function Header() {
    const navDropdownTitle = (   <i className="fa fa-user"></i>);
  return (
    <div>
    <div className="top-bar">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
                <i className="fa fa-envelope"></i>
                support@email.com
            </div>
            <div className="col-sm-6">
                <i className="fa fa-phone-alt"></i>
                +012-345-6789
            </div>
        </div>
    </div>
</div>























<div className="nav">
<div className="container-fluid">
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a href="#" className="navbar-brand">MENU</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="product-list.html" className="nav-item nav-link">Products</a>
                <a href="product-detail.html" className="nav-item nav-link">Product Detail</a>
                <a href="cart.html" className="nav-item nav-link">Cart</a>
                <a href="checkout.html" className="nav-item nav-link">Checkout</a>
                <a href="my-account.html" className="nav-item nav-link">My Account</a>
 
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                    <div className="dropdown-menu">
                        <a href="wishlist.html" className="dropdown-item">Wishlist</a>
                        <a href="login.html" className="dropdown-item">Login & Register</a>
                        <a href="contact.html" className="dropdown-item">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="navbar-nav ml-auto">
            <NavDropdown  title={navDropdownTitle} id="basic-nav-dropdown">
          
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
            </div>
        </div>
    </nav>
</div>
</div>


<div className="bottom-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="logo">
                            <a href="index.html">
                                <img src="logo.jpg" alt="Logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="search">
                            <input type="text" placeholder="Search"/>
                            <button><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="user">
                            <a href="wishlist.html" className="btn wishlist">
                                <i className="fa fa-heart"></i>
                                <span>(0)</span>
                            </a>
                            <a href="cart.html" className="btn cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</div>



  );
}

export default Header;

