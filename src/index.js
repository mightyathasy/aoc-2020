import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import PuzzleInformationForm from './components/puzzle-information-form';
import ResultLabel from './components/result-label';

ReactDOM.render(
    <div className="outer-div">
        <PuzzleInformationForm />
        <ResultLabel />
    </div>,
    document.getElementById('root')
)
