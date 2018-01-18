import React from 'react'

export default class AddDayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resort: '',
            date: '',
            sunny: '',
            long: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value});
      }
    
    handleSubmit(event) {
    alert('A trip was submitted: ' + 'resort: ' + this.state.resort + 'date: '+ this.state.date + 'sunny day: '+ this.state.sunny + 'long trip: '+ this.state.long);
    event.preventDefault();
    }
     render() {
         return(
            <form onSubmit={this.handleSubmit} className="add-day-form">
                <label htmlFor="resort">Resort Name</label>
                <input id="resort"
                name="resort"
                type="text" 
                value={this.state.resort}
                onChange={this.handleChange}
                required />

                <label htmlFor="date">Date</label>
                <input id="date" 
                name="date"
                type="date" 
                value={this.state.date}
                onChange={this.handleChange}
                required />

                <div>
                    <label htmlFor="sunny">Sunny Day</label>
                    <input id="sunny" 
                    name="sunny"
                    type="checkbox" 
                    value={this.state.sunny}
                    onChange={this.handleChange} />
                </div>

                <div>
                    <label htmlFor="long">Long Trip</label>
                    <input id="long"
                    name="long"
                    type="checkbox"
                    value={this.state.long}
                    onChange={this.handleChange} />
                </div>

                <button>Add a trip</button>
            </form>
     )
 }
}
