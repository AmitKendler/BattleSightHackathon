import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { observer } from 'mobx-react';

@observer
export default class PhotoView
extends Component {
    render() {
        return (
            <Paper>
            <img src={this.props.source}/>
            </Paper>
        );
    }
}

PhotoView.propTypes = {
    source: React.PropTypes.String,
}
