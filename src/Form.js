import React from "react";
import "./Form.css";

class Form extends React.Component {
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
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted Info")
        console.log(this.state)

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

                <div className="grid-container">
                    <div className="grid-item">
                        <h4>Monday</h4>
                        <h5>Start</h5>
                        <input type="time" name="mon_start" onChange={this.myChangeHandler}/>
                        <h5>Duration</h5>
                        <input type="number" name="mon_duration" min="0" onChange={this.myChangeHandler}/>
                    </div>

                    <div className="grid-item">
                        <h4>Tuesday</h4>
                        <h5>Start</h5>
                        <input type="time" name="tue_start" onChange={this.myChangeHandler}/>
                        <h5>Duration</h5>
                        <input type="number" name="tue_duration" min="0" onChange={this.myChangeHandler}/>
                    </div>
                    
                    <div className="grid-item">
                        <h4>Wednesday</h4>
                        <h5>Duration</h5>
                        <input type="time" name="wed_start" onChange={this.myChangeHandler}/>
                        <h5>Stop</h5>
                        <input type="number" name="wed_duration" min="0" onChange={this.myChangeHandler}/>
                    </div>

                    <div className="grid-item">
                        <h4>Thursday</h4>
                        <h5>Start</h5>
                        <input type="time" name="thurs_start" onChange={this.myChangeHandler}/>
                        <h5>Duration</h5>
                        <input type="number" name="thurs_duration" min="0" onChange={this.myChangeHandler}/>
                    </div>

                    <div className="grid-item">
                        <h4>Friday</h4>
                        <h5>Start</h5>
                        <input type="time" name="fri_start" onChange={this.myChangeHandler}/>
                        <h5>Duration</h5>
                        <input type="number" name="fri_duration" min="0" onChange={this.myChangeHandler}/>
                    </div>

                    <div className="grid-item">
                        <h4>Saturday</h4>
                        <h5>Start</h5>
                        <input type="time" name="sat_start" onChange={this.myChangeHandler}/>
                        <h5>Duration</h5>
                        <input type="number" name="sat_duration" min="0" onChange={this.myChangeHandler}/>
                    </div>

                    <div className="grid-item">
                        <h4>Sunday</h4>
                        <h5>Start</h5>
                        <input type="time" name="sun_start" onChange={this.myChangeHandler}/>
                        <h5>Duration</h5>
                        <input type="number" name="sun_duration" min="0" onChange={this.myChangeHandler}/>
                    </div>
                </div>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        )

    }
}

export default Form;