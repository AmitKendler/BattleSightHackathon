'use strict';

import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let footerStyle = {
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginTop: '20px',
            paddingTop: '30px',
            height: '200px',
            backgroundColor: '#212121',
            color: 'white'
        };
        return (
            <footer style={ footerStyle }>
        <p>
          All rights reserved to Amit Kendler
        </p>
      </footer>
        );
    }
}

export default Footer;
