import React from "react";
//import Form from "./Form.js";
//import Geo from "./Geo.js";
import Combined from "./Combined.js";

//https://www.npmjs.com/package/react-geolocated
class App extends React.Component {
    render() {
        return (
        <div>
            <h1>Popup Geolocation Tool</h1>
            {/* <Form/>
            <br/>
            <Geo/>
            <br/>
            <br/> */}
            <Combined/>
        </div>
        )
    }        
}

export default App;