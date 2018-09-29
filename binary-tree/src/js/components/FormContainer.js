import React, {Component} from "react"
import ReactDOM from "react-dom"
import TreeContainer from "./TreeContainer"
import { Insert, getPath} from "../logic"
import 'antd/dist/antd.less'


import { Button, Layout, Collapse} from 'antd'

const { Header, Footer, Content } = Layout

const Panel = Collapse.Panel


import InputModel from './Model'

class Main extends Component {
    constructor() {
        super();

        this.state = {
            value: "",
            showTree: false,
            treesD3: null,
            trees: null,
            paths : [],
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
        const { trees, treesD3 } = Insert(value)

        const paths = this.handleGetPath(trees)

        this.setState({showTree: true, treesD3: treesD3, trees: trees, paths: paths})

    }

    handleGetPath = (trees) => {
        return getPath(trees)
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
        const {visible, showTree, treesD3, paths = []} = this.state


        const createPath = paths.map((path, key) => <p key = {key}> {path} </p> )


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

                                <TreeContainer data={treesD3} id = "#chart" visible = {showTree}></TreeContainer>

                            </div>

                            <div style={{ padding: 24, background: '#fff', textAlign: 'left' ,float:'right', width: '60%'}}>

                                <Collapse defaultActiveKey={['1','2','3']}>
                                    <Panel header=" 该二叉树的所有路径 " key="1" >
                                        {createPath}
                                    </Panel>
                                    <Panel header="This is panel header 2" key="2">
                                        <p>123</p>
                                    </Panel>
                                    <Panel header="This is panel header 3" key="3" disabled>
                                        <p>321</p>
                                    </Panel>
                                </Collapse>

                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by zhangwinning
                        </Footer>
                    </Layout>
            </div>
        );
    }
}


const wrapper = document.getElementById("binaryTree")
wrapper ? ReactDOM.render(<Main/>, wrapper) : false

