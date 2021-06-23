import React, { useState, useEffect }  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Style from '../css/Styles.module.css'
import '../css/footer.css';
import { logocanagoldImg } from '../img';
import { Link } from 'react-router-dom'


const Footer = () => {

    
    const [email, setEmail] = useState('')
    const submitHandler = (e) => {
        console.log(e)
    }
  return (
    <footer>
      <div className="body">
        <div className="box3" >
    <div className="cardfooter">
       
        <div className="card-body">
            <div className="row m-0 pt-5">
            /* <div className="cardfooter col-12 col-md-3">
                    <div className="card-content"> <img src={logocanagoldImg} alt="logo" className="logo"/>
                     
                        <p className="text2"><small>With the company’s history dating 10 years back, we always felt desire to tell some kind of complete story with our clothes. So the original style mixed with an androgynous feel of a modern day makes us what we actually are.</small></p>
                        <p className="text">From 9:00 AM to 7:00 PM (GMT-8) <br/> <br/>
                          Los Angeles, California</p>
                    </div>
                   
                </div>
                */
                <div className="cardfooter col-12 col-md-2">
                    <div className="card-title text3"> USEFUL LINK  <p className="bdr3"></p>  </div>
                    <br/>
                    <div>
                    <i className="fas fa-angle-right linkico"></i>  <Link to={'/contact'}  className="link2">Help and Contact Us</Link> <br/>
                    <i className="fas fa-angle-right linkico"></i> <Link to={'/orderandrefund'}  className="link2">Shipping and Refunds</Link><br/>
                    <i className="fas fa-angle-right linkico"></i> <Link to={'/privacypolicy'}  className="link2">Privacy Policy</Link><br/>
                    <i className="fas fa-angle-right linkico"></i> <Link to={'/termandconditions'}  className="link2">Terms and Conditions</Link> <br/>
                    </div>
                </div>
                <div className="cardfooter col-12 col-md-2">
                <div>
                    <div className="card-title text3"> COMPANY  <p className="bdr3"></p></div><br/>
                    <i className="fas fa-angle-right linkico"></i>  <Link to={'/aboutus'}  className="link2">About Us</Link><br/>
                    <i className="fas fa-angle-right linkico"></i>  <Link to={'/faq'}  className="link2">FAQ</Link> <br/>                      
                    </div>
                </div>
                <div className="cardfooter col-12 col-md-2">
                    <div className="card-title text3"> PROFILE  <p className="bdr3"></p></div><br/>
                    <div>
                    <i className="fas fa-angle-right linkico"></i> <Link to={'/profile'}  className="link2">My account</Link><br/>
                    <i className="fas fa-angle-right linkico"></i> <Link to={'/checkout'}  className="link2">Checkout</Link><br/>
                    <i className="fas fa-angle-right linkico"></i> <Link to={'/track'}  className="link2">Order tracking</Link><br/>                       
                    </div>
                </div>
                <div className="cardfooter col-12 col-md-2">
                    <div className="card-title text"> Sign up for our newsletter to receive special offers, news and great events.<br/>
                  <form onSubmit={submitHandler}> 
                    <input type="email"
                  className="inp"
                  name="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   /> 
                   <button
                   className="inpbtn">SUBSCRIBE</button>
                   </form>
                   </div>
                </div>
            </div>
        </div>
        <p className="bdr2"></p>
        <div className="card-footer row">
            <div className="col-12 col-md-2">
            <p className="ticolor"> <label> <i className="fas fa-phone fa-rotate-90 phcolor "></i> </label> 18888-465-324 </p>
            <p className="copyright"> ©CANAGOLD All rights reserved. Website <a href="https://www.fixlsolutions.com" className="fixl"> @FIXLSOLUTIONS</a>
              </p>
              </div>
            <div className="col-12 col-md-2">
            <img src={logocanagoldImg} alt="logo" className="logo2"/>
            </div>
            <div className="col-12 col-md-2 left">
               <div> <p> <small className="follow-text ticolor">FOLLOW US ON SOCIAL MEDIA</small> <label className="footer-right"></label> </p></div>
                 <i className="fab fa-instagram fa-lg icocolor"></i> 
                 <i className="fab fa-facebook-square fa-lg icocolor"></i> 
                 <i className="fab fa-linkedin fa-lg icocolor"></i> 
                 <i className="fab fa-twitter-square fa-lg icocolor"></i> 
                 
            </div>
        </div>
    </div>
</div>   
 </div>
      
    </footer>
  )
}

export default Footer
