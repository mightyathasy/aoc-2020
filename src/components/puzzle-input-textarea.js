import React from 'react';
import TextArea from '@material-ui/core/TextareaAutosize';

import '../styles/index.css'
import '../styles/component-style.css'

class PuzzleInputTextArea extends React.Component {

    render() {
        return (
            <TextArea
                id="puzzle-input-textarea"
                rowsMin="30"
                rowsMax="30"
                placeholder="Just paste the input here" />
        );
    }
}

export default PuzzleInputTextArea;