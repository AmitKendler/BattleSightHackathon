'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SiteNavigate from './SiteNavigate.jsx';
import Gallery from '../gallery/Gallery.jsx';
import TextField from 'material-ui/TextField';
import Footer from './Footer.jsx';
import { RouteTransition } from 'react-router-transition';
import { red100, brown400, red200, fullBlack, darkBlack, brown700, grey900, yellowA700, white, blue700, cyan500 } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import { observer } from 'mobx-react';

const appBarHeight = '50px';

const muiTheme = getMuiTheme({
    palette: {},
    appBar: {
        height: appBarHeight
    }
});


@observer
class Container extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };
    }

    handleChange(e) {

        let text = e.target.value;
        this.setState({
            searchText: text
        });

        this.props.route.appState.filterPhotos(text)
    }

    render() {

        return (
            <div>
        <MuiThemeProvider muiTheme={ muiTheme }>
          <div>
            <AppBar
            title={ <TextField
                      fullWidth={true}
                      value={this.state.searchText}
                      onChange={this.handleChange.bind(this)}
                      hintText="חפש תמונות או סרטים"/>
}
                    children={ <SiteNavigate/> } />
            <div>
              { this.props.children }
            </div>
          </div>
        </MuiThemeProvider>
      </div>
        );
    }
}

export default Container;
