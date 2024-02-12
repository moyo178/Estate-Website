import { useState } from 'react'
import './App.css'
import logo from '../images/logo.svg'
import sky from '../images/image.png'
import sky3 from '../images/image3.png'
import sky2 from '../images/image2.png'
import sky1 from '../images/image.png'
import location from '../images/icon.svg'
import bath from '../images/Group.svg'
import bath1 from '../images/Group1.svg'
import cube from '../images/Group2.svg'
import Sarah from '../images/sarah.png'
import Kim from '../images/kim.png'
import phone from '../images/iphone.png'
import google from '../images/frame1.png'
import app from '../images/frame01.png'
import fb from '../images/fb.svg'
import insta from '../images/insta.svg'
import whatsapp from '../images/whatsapp.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='body'>
       <section className='header'>
        <div className='header-div'>
          <div id='logo1'>
            <img src={logo} alt="" className='lg' />
          </div>
          <ul>
            <li>About Us</li>
            <li>Featured</li>
            <li>Reviews</li>
            <li>Objects</li>
            <li>Contact Us</li>
          </ul>
          <div className='Signin'>
            <span className='si'>Sign in</span>
            <span className='si1'>Sign Up</span>
          </div>
        </div>
        <div className='discover'>
          <h1 className='discover-h1'>Discover your perfect property</h1>
          <div className='txt'>
            <h4 className='txt1'>At Second Floor, we are dedicated to making your dream
home a reality by providing personalized and professional
real estate services.</h4>
            <button className='btn1'>Contact us</button>
          </div>
        </div>
      </section>
      
      <section className='box'>
          <div className='box3'>
            <div className='box1'>
              <div id='line'>
              <p className='rb'>Rent Buy</p>
              </div>
              <div id='line1'>
                <div className='src'>
              <input type="search" name="add location" id="srch" placeholder='Add location'/>
              </div>
              <button className='btn2'>search</button>
              </div>
              </div>
            </div>
        </section>


        <section className='props'>
          <div className='prop-txt'>
            <div className='txts'>
              <h2 className='h2'>#10m</h2>
              <p className='jk'>
              In real estate
              transactions completed
              </p>
            </div>
            <div className='txts'>
              <h2 className='h2'>#50m</h2>
              <p className='jk'>
              properties available
              </p>
            </div>
            <div className='txts'>
              <h2 className='h2'>400+</h2>
              <p className='jk'>
              Ideals closed per month 
              </p>
            </div>
          </div>
          </section>  

          <section className='contentarea'>
              <div id='hero1'>
                <h2 className='h2'>Why us</h2>
                <h6 className='h6'>Choose Second Floor for your next real estate
                  venture. Our industry-leading team offers high-
                  quality properties, prime locations, competitive
                  prices, and expert guidance to help you find the
                  perfect property to fit your lifestyle and budget.</h6>
              </div>
              <div className='txts1'>
              <div id='hero2'>
                <h2 className='h1'>High-Quality Properties</h2>
                <p>Our properties feature
                  outstanding architecture and design.
                  </p>

                <h2 className='h1'>Competitive Prices </h2>
                <p>We offer competitive pricing for
               exceptional value.</p>
              </div>
            
              <div id='hero2'>
                <h2 className='h1'>Expert Guidance</h2>
                <p>Our experienced team provides
                  expert guidance throughout the
                  real estate process
                  </p>

                <h2 className='h1'>Prime Locations</h2>
                <p>Our properties are located in
                            prime areas </p>
              </div>
            </div>
          </section>
          <section className='featured'>
            <div className='featured-header'>
              <h3 className="h3">Featured </h3>
              <h4 className="txtt">
               <li>Flat</li> 
               <li> House </li>
               <li>Land</li>
               </h4>
            </div>
            <div className='box-flex'>
            <div className='featured-box'>
              <div className='boxx'>
                <img src={sky} alt="" className='sky'/>
                <div id='loc'>
                  <img src={location} alt="" className='bat'/>
                  <h4  className='locat'>Route de la Prairie</h4>
                  </div>
                                  
                  <div className='fl'>
                  <div className='j1'>
                    <img src={bath} alt="" className='jh' /> 
                    <span className='jk1'>
                      2 bed
                      </span>
                      </div>                
                  <div className='j1'>
                    <img src={bath1} alt="" className='jh' /> 
                    <span className='jk1'>
                      2 bath
                      </span>
                      </div>                
                  <div className='j1'>
                    <img src={cube} alt="" className='jh' /> 
                    <span className='jk1'>
                      85 sqft
                      </span>
                      </div>
                  </div>
                <div className='div'>
                <h3 className='me'>$160,000</h3>
                <button className='btn5'>Details</button> 
              </div>
              </div>
            </div>


            {/* beginning1 */}
            <div className='featured-box'>
              <div className='boxx'>
                <img src={sky3} alt="" className='sky'/>
                <div id='loc'>
                  <img src={location} alt="" className='bat'/>
                  <h4  className='locat'>Rte de fleursdes</h4>
                  </div>
                                  
                  <div className='fl'>
                  <div className='j1'>
                    <img src={bath} alt="" className='jh' /> 
                    <span className='jk1'>
                      3 bed
                      </span>
                      </div>                
                  <div className='j1'>
                    <img src={bath1} alt="" className='jh' /> 
                    <span className='jk1'>
                      2 bath
                      </span>
                      </div>                
                  <div className='j1'>
                    <img src={cube} alt="" className='jh' /> 
                    <span className='jk1'>
                      92 sqft
                      </span>
                      </div>
                  </div>


                 
                <div className='div'>
                <h3 className='me'>$175,000</h3>
                <button className='btn5'>Details</button> 
              </div>
              </div>
            </div>

             {/* beginning2 */}
            <div className='featured-box'>
              <div className='boxx'>
                <img src={sky2} alt="" className='sky'/>
                <div id='loc'>
                  <img src={location} alt="" className='bat'/>
                  <h4  className='locat'>loocs de la Prairmine</h4>
                  </div>
                                  
                  <div className='fl'>
                  <div className='j1'>
                    <img src={bath} alt="" className='jh' /> 
                    <span className='jk1'>
                      4 bed
                      </span>
                      </div>                
                  <div className='j1'>
                    <img src={bath1} alt="" className='jh' /> 
                    <span className='jk1'>
                      3 bath
                      </span>
                      </div>                
                  <div className='j1'>
                    <img src={cube} alt="" className='jh' /> 
                    <span className='jk1'>
                      90 sqft
                      </span>
                      </div>
                  </div>

                  
                <div className='div'>
                <h3 className='me'>$300,000</h3>
                <button className='btn5'>Details</button> 
              </div>
              </div>
            </div>
            {/* beginning */}
            <div className='featured-box'>
              <div className='boxx'>
                <img src={sky1} alt="" className='sky'/>
                <div id='loc'>
                  <img src={location} alt="" className='bat'/>
                  <h4  className='locat'>Chemin du Mout</h4>
                  </div>
                                  
                  <div className='fl'>
                  <div className='j1'>
                    <img src={bath} alt="" className='jh' /> 
                    <span className='jk1'>
                      5 bed
                      </span>
                      </div>                
                  <div className='j1'>
                    <img src={bath1} alt="" className='jh' /> 
                    <span className='jk1'>
                      4 bath
                      </span>
                      </div>                
                  <div className='j1'>
                    <img src={cube} alt="" className='jh' /> 
                    <span className='jk1'>
                      97 sqft
                      </span>
                      </div>
                  </div>
                <div className='div'>
                <h3 className='me'>$660,000</h3>
                <button className='btn5'>Details</button> 
              </div>
              </div>
            </div>
            </div>
          </section>

          <section className='reviews'>
            <h1>Customer Reviews of Our Services</h1>
            <div className='review'>
              <div className='review1'>
                <img src={Sarah} alt="" />
                <div className='revieww1'>
                <h3>Sarah Lee</h3>
                <span className='txxt'>
                I had an excellent experience with Second
                Floor Real Estate. They listened to my needs
                and preferences and provided me with a 
                range of options that met my expectations.
                The team was always available to answer my
                questions
                </span>
                </div>
              </div>


              <div className='review2'>
                <img src={Kim} alt="" />
                <div className='revieww'>
                <h3>David Kim</h3>
                <span className='txxt1'>
                I had an excellent experience with Second
                Floor Real Estate. They listened to my needs
                and preferences and provided me with a 
                range of options that met my expectations.
                The team was always available to answer my
                questions
                </span>
                </div>
              </div>
            </div>
          </section>
          <section className='hunting'>
            <div className='house-box'>
              <div className='download'>
            <h2  className="house">
            House hunting on-the-go 
            </h2>
            <h4 className='down'>
            Download our app to search properties, save favorites
            and stay up-to-date.
            </h4>
              <div className='load'>
                <img src={google} alt="" /> 
                <img src={app} alt="" />
              </div>
            </div>
            <img src={phone} alt="" />
            </div>
          </section>
          <footer className='footer'>
        <div className='footer-div'>
          <div id='logo1'>
            <img src={logo} alt="" className='lg' />
          </div>
          <ul>
            <li>About Us</li>
            <li>Featured</li>
            <li>Reviews</li>
            <li>Objects</li>
            <li>Contact Us</li>
          </ul>
          <div className='logos'>
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div className='copyright'>2023 All right reserved</div>
        </footer>
    </section>
    
    </>
  )
}

export default App
