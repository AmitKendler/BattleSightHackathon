import React, { Component } from 'react';
import PhotoInfo from './PhotoInfo.jsx';
import PhotoView from './PhotoView.jsx';
import { GridList, GridTile } from 'material-ui/GridList';
import { observer } from 'mobx-react';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'


    },
    gridList: {
        width: '100%',
        height: 'auto',
        overflowY: 'auto',
    },

};


@observer
export default class PhotoMain
extends Component {

    // Handle remove
    handleRemove(id) {

        this.props.route.appState.removeTagFromImage(id, Number.parseInt(this.props.params.id));
    }

    // Handle remove
    handleAdd(tagText) {

        this.props.route.appState.addTagToImage(tagText, Number.parseInt(this.props.params.id));
    }

    render() {


        const images = this.props.route.appState.images;

        return (
            <div style={styles.root}>
            <GridList
            cols={10}
            style={styles.gridList}
            cellHeight={510}
            > 
            <GridTile cols={3}>
                <PhotoInfo model={images[this.props.params.id]} remove={this.handleRemove.bind(this)} add={this.handleAdd.bind(this)}/>
            </GridTile>
            <GridTile cols={7}>
                <PhotoView source={images[this.props.params.id].img} />
            </GridTile>
            </GridList>
        </div>
        );
    }
}
