import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PuzzleSelect from './puzzle-select';
import PuzzleInputTextArea from './puzzle-input-textarea';

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
            <Grid container spacing={2} direction="column" justify="center">
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <PuzzleSelect />
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit} >Submit</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <PuzzleInputTextArea />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default PuzzleInformationForm;