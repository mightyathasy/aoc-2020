import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';

import './styles/index.css';

import PuzzleInformationForm from './components/puzzle-information-form';

ReactDOM.render(
    <div>
        <Container maxWidth="sm">
            <PuzzleInformationForm />
        </Container>
    </div>,
    document.getElementById('root')
)
