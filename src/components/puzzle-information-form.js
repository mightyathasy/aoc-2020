import React from 'react';

import '../styles/index.css'
import '../styles/component-style.css'

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
            <div className="form-column">
                <form onSubmit={this.handleSubmit}>
                    <label className="puzzle-select-label">
                        Number of Puzzle:
                            <input type="text" value={this.state.value} onChange={this.handleChange} size={40} placeholder={"type something like 1/a or 3/B"} />
                    </label>
                    <input type="submit" value="Submit" />
                    <br />
                    <label className="puzzle-input-label">
                        Input of Puzzle:
                            <br />
                        <textarea placeholder={"Just paste the input here."} />
                    </label>
                </form>
            </div>
        );
    }
}

export default PuzzleInformationForm;