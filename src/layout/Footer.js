import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
        <div>
          <footer className="footer">
            <span className="footer-text">
              <a href="#">Facebook</a>{'  '}
              <a href="#">RiverRaders@Rapids.com</a>{'  '}
              <a href="#">(123)456-7890</a>
            </span>
          </footer>
        </div>
      );
  }
}

export default Footer;
