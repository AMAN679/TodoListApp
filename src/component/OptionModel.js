import React from 'react'
import Modal from 'react-modal'
import { handleModel } from './IndecisionApp'

const OptionModel = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel={"Selected Option"}
            onRequestClose={props.handleModel}
            closeTimeoutMS={200}
            className="modal">
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleModel}>Okay!</button>
        </Modal>

    );
}

export default OptionModel;
