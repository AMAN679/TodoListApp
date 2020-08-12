import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModel from './OptionModel'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }


    handleModel = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }



    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => {
                    return { options }
                });
            }
        }
        catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("Component Will unmount")
    }
    handleDeleteOption(optionToRemove) {

        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return option !== optionToRemove;
                })
            }
        })

    }
    handleAddOption(option) {

        if (!option.trim()) {
            return 'Not Valid';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "Already Exist";
        }
        this.setState((prevState) => {

            return {
                options: prevState.options.concat([option])
            };
        })
    }

    handlePick() {

        let ran = Math.floor(Math.random() * this.state.options.length);
        let r = (this.state.options[ran]);
        this.setState(() => {
            return {
                selectedOption: r
            };
        })

    }

    handleDeleteOptions() {
        this.setState(() => {

            return {
                options: []
            };
        });
    }
    render() {


        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />

                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}

                        />

                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModel selectedOption={this.state.selectedOption}
                    handleModel={this.handleModel} />
            </div>
        );
    }
}
