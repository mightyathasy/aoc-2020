import React from 'react';
import Button from '@material-ui/core/Button';

import PuzzleSelect from './puzzle-select';

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
                    <PuzzleSelect />
                    <Button variant="contained" color="primary">Submit</Button>
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