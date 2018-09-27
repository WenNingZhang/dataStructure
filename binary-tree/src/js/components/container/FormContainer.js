import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Input from "../presentational/Input";
import TreeContainer from "./TreeContainer";
import Logic from "../../logic";
// import Styles from './index.scss';
import 'antd/dist/antd.less'

import { Button } from 'antd'

import InputModel from './Model'

class Main extends Component {
    constructor() {
        super();

        this.state = {
            value: "",
            showTree: false,
            handleData: null,
            showModel: false,
        };

    }

    /**
     * https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
     *  When you need to handle multiple controlled input elements, you can add a name attribute to each element and
     *  let the handler function choose what to do based on the value of event.target.name.
     *  // arrow function
     *  https://stackoverflow.com/questions/41398645/unable-to-use-arrow-functions-inside-react-component-class
     */
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    };

    ok = () => {
        const value = this.state.value
        const treeNodes = Logic(value)
        if (treeNodes) this.setState({showTree: true})
        this.setState({handleData: treeNodes})
    }

    showModal = () => {
        this.setState({showModel: true})
    }

    onShownModal = (e) => {
        console.log('------->', e)
    }

    render() {
        const {value, showTree, handleData, showModel} = this.state

        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    input
                </Button>

                {
                    showModel ? <InputModel onShowModal = {this.onShowModal} visible = {true}></InputModel> : null
                }

                {
                    showTree ? <div Class="col-xs-6 col-sm-3">
                        <TreeContainer data={handleData}></TreeContainer>
                    </div> : null
                }
            </div>
        );
    }
}


const wrapper = document.getElementById("binaryTree");
wrapper ? ReactDOM.render(<Main/>, wrapper) : false;

