import React from 'react';

import '../styles/index.css'
import '../styles/component-style.css'

class ResultLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Placeholder for results' };
    }

    render() {
        return (
            <div className="result-column">
                <label>
                    Placeholder of result output
                </label>
            </div>
        )
    }
}

export default ResultLabel;