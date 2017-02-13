import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Dropzone from 'react-dropzone';
import { GridList, GridTile } from 'material-ui/GridList';
export default class UplaodMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: []
        };
    }

    onDrop(accepted, rejected) {
        let newCols = (accepted.length % 3) ? (accepted.length % 3) : 3;
        this.setState({
            images: accepted
        });

    }

    render() {
        const style = {
            width: '90%',
            height: 510,
            margin: 'auto',
            marginTop: 10,
            marginBotton: 10,
            padding: 20
        };

        const dropStyle = {
            margin: 'auto',
            width: '80%',
            height: 50,
            borderWidth: '2px',
            borderColor: 'rgb(102, 102, 102)',
            borderStyle: 'dashed',
            borderRadius: '5px',
            textAlign: 'center'
        };

        return (
            <div>
                <Paper style={style} zDepth={4} >
                 <Dropzone style={dropStyle} accept="image/*"  onDrop={this.onDrop.bind(this)}>
                      <div>גרור תמונות או סרטונים לכאן </div>
                 </Dropzone>
                     <GridList style={{height : 420 , overflowY:'auto' , marginTop : 5}}
                      cols={2}
                      cellHeight={420}
                    > 
                      {this.state.images.map((image,index) => (
                        <GridTile
                          title={image.name}
                          subtitle={new Date(image.lastModified).toLocaleDateString() + " " + new Date(image.lastModified).toLocaleTimeString()  }
                        >
                         <img src={image.preview}/>

                        </GridTile>
                      ))}
                    </GridList>
                </Paper>
            </div>
        );
    }
}
