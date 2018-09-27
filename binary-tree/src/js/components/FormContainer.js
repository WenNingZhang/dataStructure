import React, {Component} from "react"
import ReactDOM from "react-dom"
import TreeContainer from "./TreeContainer"
import Logic from "../logic"
import 'antd/dist/antd.less'


import { Button, Layout } from 'antd'

const { Header, Footer, Content } = Layout

import InputModel from './Model'

class Main extends Component {
    constructor() {
        super();

        this.state = {
            value: "",
            showTree: false,
            handleData: null,
            visible: false
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
    }

    handleLogic = (value) => {
        const treeNodes = Logic(value)

        this.setState({showTree: true, handleData: treeNodes})
    }


    showModal = () => {
        this.setState({visible: true})
    }

    onShowModal = (visible) => {
        this.setState({visible})
    }

    onInputChange = (value) => {
        this.setState({value})
        this.handleLogic(value)
    }

    render() {
        const {visible, showTree, handleData } = this.state

        return (
            <div>

                    <Layout style={{ marginLeft: 0 }}>
                        <Header style={{ background: '#fff', padding: 0 }} >

                            <Button type="primary" onClick={this.showModal}>

                                input value

                            </Button>

                            <InputModel onShowModal = {this.onShowModal} onInputChange = { this.onInputChange } visible = {visible}></InputModel>

                        </Header>
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

                            <div style={{ background: '#fff', textAlign: 'center' , float:'left', width: '38%'}} id = "chart">

                                <TreeContainer data={handleData} id = "#chart" visible = {showTree}></TreeContainer>

                            </div>

                            <div style={{ padding: 24, background: '#fff', textAlign: 'center' ,float:'right', width: '60%'}}>
                                ...
                                <br />
                                Really
                                <br />...<br />...<br />...<br />
                                long
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />...
                                <br />...<br />...<br />...<br />...<br />...<br />
                                content
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
            </div>
        );
    }
}


const wrapper = document.getElementById("binaryTree")
wrapper ? ReactDOM.render(<Main/>, wrapper) : false

