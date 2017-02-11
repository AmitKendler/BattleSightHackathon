import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Event from 'material-ui/svg-icons/action/event';
import Location from 'material-ui/svg-icons/communication/location-on';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Subheader from 'material-ui/Subheader';
import { observer } from 'mobx-react';

@observer
export default class PhotoInfo
extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTag: ''
        };
    }

    addTag(tag) {

        this.props.add(tag, this.props.model.id);

        this.setState({
            newTag: ' '
        });
    }


    handeInputChange(e) {
        this.setState({
            newTag: e.target.value
        });
    }

    render() {


        const paperStyle = {
            height: 495,
            width: '95%',
            margin: 10,
            direction: 'rtl',
            overflowY: 'auto'
        };

        const contentStyle = {
            height: '65%',
            width: '100%',
            direction: 'rtl',
        };
        const mainTitle = {
            direction: 'rtl',
            paddingRight: 16,
            paddingTop: 10
        };

        const subTitle = {
            direction: 'rtl',
            paddingRight: 10
        };

        const chipStyles = {
            chip: {
                margin: 4,
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
            },
        };


        return (
            <div>
            <Paper style={paperStyle}>
                <h4 style={mainTitle}>מידע</h4>
                 <TextField  value={this.state.newTag} onChange={ (e) => this.handeInputChange(e)} onKeyPress={(e) => {(e.key === 'Enter' ? this.addTag(e.target.value):null)}} style={{ width : '90%', marginRight : '5%' }}
                        hintText="הוסף תיוגים"
                    />
                <div style={chipStyles.wrapper}>
                {this.props.model.tags.map((tag,index) => (
                    <Chip style={chipStyles.chip} key={index} onRequestDelete={ () => this.props.remove(tag.index,this.props.model.id)}>{tag.value}</Chip>
                ))}
                </div>
                <div style={contentStyle}>
                 <List>
                 <Subheader inset={true} style={subTitle}>פרטים</Subheader>
                  <ListItem disabled={true} primaryText={this.props.model.title} secondaryText={this.props.model.author} rightIcon={<ActionInfo />} />
                 <ListItem disabled={true} primaryText="23 ביונ'" secondaryText="יום שני 15:12" rightIcon={<Event />} />
                 <ListItem disabled={true} primaryText={this.props.model.place}  secondaryText={this.props.model.coordinates.x + ' , ' + this.props.model.coordinates.y} rightIcon={<Location />} />
                 <ListItem disabled={true} primaryText="במל''ס" rightIcon={<Fingerprint />} />
                 </List>
                </div>
                <div >
                </div>
            </Paper>
            </div>
        );
    }
}
