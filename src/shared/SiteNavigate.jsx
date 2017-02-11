'use strict';

import React from 'react';
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton';



class SiteNaviage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let styles = {
            main: {
                margin: 'auto'
            },
            buttons: {
                color: 'white'
            },
            search: {
                color: 'white'
            }
        };

        return (
            <div style={ styles.main }>
                    <FlatButton
                    style={ styles.buttons }
                    label="דף הבית"
                    containerElement={<Link to="/" />} />
      </div>
        );
    }
}

export default SiteNaviage;
