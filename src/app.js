import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './component/IndecisionApp'
import 'normalize.css/normalize.css'
import './style/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
/*class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>

        );
    }
}*/


/*class Options extends React.Component {




    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} OptionText={option} />
                    })
                }
                <Option />
            </div>
        );
    }
}*/





