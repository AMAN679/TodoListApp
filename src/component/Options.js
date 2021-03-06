import React from 'react'
import Option from './Option'
const Options = (props) => {
    return (
        <div>
            <div className="widget-header">

                <h3 className="title">Your Options</h3>
                <button className="button button--link"
                    onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
            {props.options.length === 0 && <p className="widget-message">Please Add an option</p>}
            {
                props.options.map((option, index) => {
                    return <Option key={option}
                        OptionText={option}
                        count={index + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                })
            }

        </div>
    );

}
export default Options;