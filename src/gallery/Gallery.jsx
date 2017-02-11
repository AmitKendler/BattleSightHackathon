'use strict';

import React, { Component } from 'react';
import PhotoCard from './PhotoCard.jsx';
import { GridList, GridTile } from 'material-ui/GridList';
import { observer } from 'mobx-react';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 10

    },
    gridList: {
        width: '100%',
        height: 'auto',
        overflowY: 'auto',
    },

};

@observer
export default
class Gallery extends Component {


    render() {

        return (
            <div>
     <div style={styles.root}>
    <GridList
      cols={4}
      cellHeight={250}
      style={styles.gridList}
    > 
      {Object.keys(this.props.route.appState.imagesShown).map((key,index) => (
        <GridTile
          key={index}
          title={this.props.route.appState.imagesShown[key].title}
          subtitle={<span>by <b>{this.props.route.appState.imagesShown[key].author}</b></span>}
        >
         <PhotoCard photoData={this.props.route.appState.imagesShown[key]}/> 
        </GridTile>
      ))}
    </GridList>
  </div>
             
         </div>
        );
    }
}
