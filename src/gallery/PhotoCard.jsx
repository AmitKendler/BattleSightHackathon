import React, { Component } from 'react';
import { Link } from 'react-router'
import { observer } from 'mobx-react';

@observer
export default class PhotoCard
extends Component {
    render() {
        return (
            <Link to={"photo/" +  this.props.photoData.id }>
        	<img style={{height:'100%' , width: '100%'}} src={this.props.photoData.img} />
        	</Link>);
    }
}
