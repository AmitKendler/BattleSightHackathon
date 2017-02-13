import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Router, IndexRoute, Route, Link, Redirect, browserHistory } from "react-router";
import Container from './shared/Container.jsx';
import Gallery from './gallery/Gallery.jsx';
import PhotoMain from './gallery/PhotoMain.jsx';
import UploadMain from './gallery/UploadMain.jsx';
import MapMain from './gallery/UploadMain.jsx';


@observer
class App extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
        <Route
               path="/"
               component={ Container }
               appState={this.props.appState}
               history={ browserHistory }>
          <Route
                 name="home"
                 component={ Gallery } appState={this.props.appState} /> 
          <Route
                 path="/upload"
                 name="upload"
                 component={ UploadMain } appState={this.props.appState} /> 
          <Route
                 path="/map"
                 name="map"
                 component={ MapMain } appState={this.props.appState} /> 
          <Route path="photo/:id" component={PhotoMain} appState={this.props.appState} />
          <IndexRoute component={ Gallery } appState={this.props.appState}/>
        </Route>
      </Router>
        );
    }
};

export default App;
