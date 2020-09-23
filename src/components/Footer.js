import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the our newsletter to receive our latest news and posts about these talented people!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      
      
        
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              
              <i class='fas fa-user-ninja' />
              The Ninja Hub
            </Link>
          </div>
          <small class='website-rights'>Po Tin Mak © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='/github'
              target='_blank'
              aria-label='Github'
            >
              <i class="fab fa-github"></i>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/twitter'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/linkedin'
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
