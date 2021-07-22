import React from "react";
import { geolocated } from "react-geolocated";
import "./Combined.css";

//https://www.npmjs.com/package/react-geolocated

//Props of Geo data and Form data combined
class Combined extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shop_name: 'none',
            mon_start: 'none',
            tue_start: 'none',
            wed_start: 'none',
            thurs_start: 'none',
            fri_start: 'none',
            sat_start: 'none',
            sun_start: 'none',
            mon_duration: 'none',
            tue_duration: 'none',
            wed_duration: 'none',
            thurs_duration: 'none',
            fri_duration: 'none',
            sat_duration: 'none', 
            sun_duration: 'none',
        };

        this.returnDat = {
            Name: 'none',
            Latitude: 0.0,
            Longitude: 0.0,
            Type: 0,
            Schedule: {
                "0": {
                    StartHour: 0,
                    StartMinute: 0,
                    HoursAfter: 0,
                    MinutesAfter: 0
                },

                "1": {
                    StartHour: 0,
                    StartMinute: 0,
                    HoursAfter: 0,
                    MinutesAfter: 0
                },

                "2": {
                    StartHour: 0,
                    StartMinute: 0,
                    HoursAfter: 0,
                    MinutesAfter: 0
                },

                "3": {
                    StartHour: 0,
                    StartMinute: 0,
                    HoursAfter: 0,
                    MinutesAfter: 0
                },

                "4": {
                    StartHour: 0,
                    StartMinute: 0,
                    HoursAfter: 0,
                    MinutesAfter: 0
                },

                "5": {
                    StartHour: 0,
                    StartMinute: 0,
                    HoursAfter: 0,
                    MinutesAfter: 0
                },

                "6": {
                    StartHour: 0,
                    StartMinute: 0,
                    HoursAfter: 0,
                    MinutesAfter: 0
                } 
            }
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted Info");
        this.returnDat["Name"] = this.state["shop_name"];
        this.returnDat["Latitude"] = this.props.coords.latitude;
        this.returnDat["Longitude"] = this.props.coords.longitude;
        this.returnDat["Type"] = 1; 
        
        if (this.state["mon_start"]) {
            let timeSplit = this.state["mon_start"].split(":")
            let afterSplit = this.state["mon_duration"].split(":")

            this.returnDat["Schedule"]["0"]["StartHour"] = parseInt(timeSplit[0]);
            this.returnDat["Schedule"]["0"]["StartMinute"] = parseInt(timeSplit[1]);
            this.returnDat["Schedule"]["0"]["HoursAfter"] = parseInt(afterSplit[0]);
            this.returnDat["Schedule"]["0"]["MinutesAfter"] = parseInt(afterSplit[1]);
        }
        if (this.state["tue_start"]) {
            let timeSplit = this.state["tue_start"].split(":")
            let afterSplit = this.state["tue_duration"].split(":")

            this.returnDat["Schedule"]["1"]["StartHour"] = parseInt(timeSplit[0]);
            this.returnDat["Schedule"]["1"]["StartMinute"] = parseInt(timeSplit[1]);
            this.returnDat["Schedule"]["1"]["HoursAfter"] = parseInt(afterSplit[0]);
            this.returnDat["Schedule"]["1"]["MinutesAfter"] = parseInt(afterSplit[1]);
        }
        if (this.state["wed_start"]) {
            let timeSplit = this.state["wed_start"].split(":")
            let afterSplit = this.state["wed_duration"].split(":")

            this.returnDat["Schedule"]["2"]["StartHour"] = parseInt(timeSplit[0]);
            this.returnDat["Schedule"]["2"]["StartMinute"] = parseInt(timeSplit[1]); 
            this.returnDat["Schedule"]["2"]["HoursAfter"] = parseInt(afterSplit[0]);
            this.returnDat["Schedule"]["2"]["MinutesAfter"] = parseInt(afterSplit[1]);
        }
        if (this.state["thurs_start"]) {
            let timeSplit = this.state["thurs_start"].split(":")
            let afterSplit = this.state["thurs_duration"].split(":")

            this.returnDat["Schedule"]["3"]["StartHour"] = parseInt(timeSplit[0]);
            this.returnDat["Schedule"]["3"]["StartMinute"] = parseInt(timeSplit[1]);
            this.returnDat["Schedule"]["3"]["HoursAfter"] = parseInt(afterSplit[0]);
            this.returnDat["Schedule"]["3"]["MinutesAfter"] = parseInt(afterSplit[1]);
        }
        if (this.state["fri_start"]) {
            let timeSplit = this.state["fri_start"].split(":")
            let afterSplit = this.state["fri_duration"].split(":")

            this.returnDat["Schedule"]["4"]["StartHour"] = parseInt(timeSplit[0]);
            this.returnDat["Schedule"]["4"]["StartMinute"] = parseInt(timeSplit[1]);
            this.returnDat["Schedule"]["4"]["HoursAfter"] = parseInt(afterSplit[0]);
            this.returnDat["Schedule"]["4"]["MinutesAfter"] = parseInt(afterSplit[1]);
        }
        if (this.state["sat_start"]) {
            let timeSplit = this.state["sat_start"].split(":")
            let afterSplit = this.state["sat_duration"].split(":")

            this.returnDat["Schedule"]["5"]["StartHour"] = parseInt(timeSplit[0]);
            this.returnDat["Schedule"]["5"]["StartMinute"] = parseInt(timeSplit[1]);
            this.returnDat["Schedule"]["5"]["HoursAfter"] = parseInt(afterSplit[0]);
            this.returnDat["Schedule"]["5"]["MinutesAfter"] = parseInt(afterSplit[1]);
        }
        if (this.state["sun_start"]) {
            let timeSplit = this.state["sun_start"].split(":")
            let afterSplit = this.state["sun_duration"].split(":")

            this.returnDat["Schedule"]["6"]["StartHour"] = parseInt(timeSplit[0]);
            this.returnDat["Schedule"]["6"]["StartMinute"] = parseInt(timeSplit[1]);
            this.returnDat["Schedule"]["6"]["HoursAfter"] = parseInt(afterSplit[0]);
            this.returnDat["Schedule"]["6"]["MinutesAfter"] = parseInt(afterSplit[1]);
        }

        console.log(this.returnDat)

    }

    myChangeHandler = (event) => {
        let prop_name = event.target.name;
        let prop_value = event.target.value.trim();
        this.setState({[prop_name]: prop_value});
    }

    render() {
        //console.log(this.props);
        //console.log(this.state);
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div>
                <div>
                    <h2>Shop Info</h2>
                    <form onSubmit={this.mySubmitHandler}>
                        <h4>Shop Name</h4>
                        <input type="text" name="shop_name" onChange={this.myChangeHandler}/>
                        <br/><br/>

                        <div className="grid-container">
                            <div className="columnDivider">
                                <h4>Monday</h4>
                                <h5>Start</h5>
                                <input type="time" name="mon_start" onChange={this.myChangeHandler}/>
                                <h5>Duration (hr:min)</h5>
                                <input type="text" name="mon_duration" min="0" onChange={this.myChangeHandler}/>
                            </div>

                            <div className="grid-item">
                                <h4>Tuesday</h4>
                                <h5>Start</h5>
                                <input type="time" name="tue_start" onChange={this.myChangeHandler}/>
                                <h5>Duration (hr:min)</h5>
                                <input type="text" name="tue_duration" min="0" onChange={this.myChangeHandler}/>
                            </div>
                            
                            <div className="grid-item">
                                <h4>Wednesday</h4>
                                <h5>Duration (hr:min)</h5>
                                <input type="time" name="wed_start" onChange={this.myChangeHandler}/>
                                <h5>Duration (hr:min)</h5>
                                <input type="text" name="wed_duration" min="0" onChange={this.myChangeHandler}/>
                            </div>

                            <div className="grid-item">
                                <h4>Thursday</h4>
                                <h5>Start</h5>
                                <input type="time" name="thurs_start" onChange={this.myChangeHandler}/>
                                <h5>Duration (hr:min)</h5>
                                <input type="text" name="thurs_duration" min="0" onChange={this.myChangeHandler}/>
                            </div>

                            <div className="grid-item">
                                <h4>Friday</h4>
                                <h5>Start</h5>
                                <input type="time" name="fri_start" onChange={this.myChangeHandler}/>
                                <h5>Duration (hr:min)</h5>
                                <input type="text" name="fri_duration" min="0" onChange={this.myChangeHandler}/>
                            </div>

                            <div className="grid-item">
                                <h4>Saturday</h4>
                                <h5>Start</h5>
                                <input type="time" name="sat_start" onChange={this.myChangeHandler}/>
                                <h5>Duration (hr:min)</h5>
                                <input type="text" name="sat_duration" min="0" onChange={this.myChangeHandler}/>
                            </div>

                            <div className="grid-item">
                                <h4>Sunday</h4>
                                <h5>Start</h5>
                                <input type="time" name="sun_start" onChange={this.myChangeHandler}/>
                                <h5>Duration (hr:min)</h5>
                                <input type="text" name="sun_duration" min="0" onChange={this.myChangeHandler}/>
                            </div>
                        </div>
                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                
                <div>  
                    <table>
                        <tbody>
                            <tr>
                                <td>latitude</td>
                                <td>{this.props.coords.latitude}</td>
                            </tr>
                            <tr>
                                <td>longitude</td>
                                <td>{this.props.coords.longitude}</td>
                            </tr>
                            <tr>
                                <td>altitude</td>
                                <td>{this.props.coords.altitude}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );

    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(Combined);

