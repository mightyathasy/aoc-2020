import React from 'react';

class PuzzleInformationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('The functionality does not work yet.');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Number of Puzzle:
                   <input type="text" value={this.state.value} onChange={this.handleChange} size={40} placeholder={"type something like 1/a or 3/B"}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default PuzzleInformationForm;