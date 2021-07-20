import React from "react";
import "./Form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shop_name: '',

            mon_start: '',
            tue_start: '',
            wed_start: '',
            thurs_start: '',
            fri_start: '',
            sat_start: '',
            sun_start: '',

            mon_duration: '',
            tue_duration: '',
            wed_duration: '',
            thurs_duration: '',
            fri_duration: '',
            sat_duration: '', 
            sun_duration: '',
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Submitted Info: " + this.state.shop_name + "\n" + this.state.mon_start + "\n"
        + this.state.mon_duration);

    }

    myChangeHandler = (event) => {
        let prop_name = event.target.name
        let prop_value = event.target.value
        this.setState({[prop_name]: prop_value});
    }

    render() {
        return (
        <div>
            <h2>Shop Info</h2>
            <form onSubmit={this.mySubmitHandler}>
                <h4>Shop Name</h4>
                <input type="text" name="shop_name" onChange={this.myChangeHandler}/>
                <br/><br/>
                <h3>Schedule</h3>

                <div className="grid-container">
                    <div className="grid-item">
                        <h4>Monday</h4>
                        <h5>Start</h5>
                        <input type="time" name="mon_start" onChange={this.myChangeHandler}/>
                        <h5>Duration</h5>
                        <input type="number" name="mon_duration" onChange={this.myChangeHandler}/>
                    </div>

                    <div className="grid-item">
                        <h4>Tuesday</h4>
                        <h5>Start</h5>
                        <input type="time"/>
                        <h5>Duration</h5>
                        <input type="number"/>
                    </div>
                    
                    <div className="grid-item">
                        <h4>Wednesday</h4>
                        <h5>Duration</h5>
                        <input type="time"/>
                        <h5>Stop</h5>
                        <input type="number"/>
                    </div>

                    <div className="grid-item">
                        <h4>Thursday</h4>
                        <h5>Start</h5>
                        <input type="time"/>
                        <h5>Duration</h5>
                        <input type="number"/>
                    </div>

                    <div className="grid-item">
                        <h4>Friday</h4>
                        <h5>Start</h5>
                        <input type="time"/>
                        <h5>Duration</h5>
                        <input type="number"/>
                    </div>

                    <div className="grid-item">
                        <h4>Saturday</h4>
                        <h5>Start</h5>
                        <input type="time"/>
                        <h5>Duration</h5>
                        <input type="number"/>
                    </div>

                    <div className="grid-item">
                        <h4>Sunday</h4>
                        <h5>Start</h5>
                        <input type="time"/>
                        <h5>Duration</h5>
                        <input type="number"/>
                    </div>
                </div>
                
                <input type="submit"/>

            </form>
        </div>
        )

    }
}

export default Form;