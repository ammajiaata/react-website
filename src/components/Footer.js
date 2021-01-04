import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the journey to tantalize your tastebuds.
        </p>
        <p className='footer-subscription-text'>
          Call us now to find out if we're delivering at your doorstep.
        </p>
        <p>Contact numbers <a a href="tel:9810012493">9810012493</a>   , <a href="tel:9810058125">9810058125</a>  
        </p>
        <p>
          Visit us at <a href='https://www.google.co.in/maps/dir/28.7188327,77.1370002/amma+ji+aata+chakki/@28.7038594,77.1023764,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d057a38188093:0x754d873ff9863c83!2m2!1d77.1010516!2d28.6910277'>9 DDA VARDHMAN MARKET ,West Enclave , Pitam Pura</a>
        </p>
      </section>
      <div class='footer-links'>
       
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2 >Our Product is also available </h2>
            <Link to='/contact'>At these Stores</Link>
            </div>
            <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Prefer buying Online?</h2>
           <a href='https://www.amazon.in/ref=nav_logo'>Amazon</a>
           <a href='https://www.indiamart.com/'>IndiaMart</a>
           <a href='https://grofers.com/'>Grofers</a>
           <a href='https://www.bigbasket.com/?nc=logo'>BigBasket</a>
           <a href='https://www.flipkart.com/'>Flipkart</a>
          </div>
          
        </div>
          <div class='footer-link-items'>
            <h2>Want to Sell our product at your Store?</h2>
            <p></p>
            <a href="tel:9976462222">Call Us</a>
            <a href='anshgoel098@gmail.com'>Mail Us</a>
          </div>
          <div class='footer-link-items'> 
            <h2>Let us know your feedback</h2>
            <a href='https://www.facebook.com/yogesh.goel.79656'>Facebook</a>
            <a href='https://www.linkedin.com/in/ansh-goel-4743a714b/'>LinkedIn</a>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Amma Ji Aata
              
            </Link>
          </div>
          <small class='website-rights'>Amma Ji Aata © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/yogesh.goel.79656'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;