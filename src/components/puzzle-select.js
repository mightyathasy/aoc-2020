import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import '../styles/index.css'
import '../styles/component-style.css'

class PuzzleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { puzzle: '' };
        
    }

    setPuzzle(puzzle) {
        this.setState((state) => {
            return {puzzle: puzzle};
        })
    }

    handleCHange(event) {
        this.setPuzzle(event.target.value);
    }

    render() {
        return (
            <FormControl className="form-select">
                <InputLabel id="puzzle-select-label">Puzzle</InputLabel>
                <Select
                    labelId="puzzle-select-label"
                    id="puzzle-select"
                    value={this.state.state}
                    onChange={this.handleChange}
                >
                    <MenuItem value={"1-a"}>1-a</MenuItem>
                    <MenuItem value={"1-b"}>1-b</MenuItem>
                    <MenuItem value={"2-a"}>2-a</MenuItem>
                </Select>
            </FormControl>
        )
    }
}

export default PuzzleSelect;