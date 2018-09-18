import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Input from "../presentational/Input";
import TreeContainer from "./TreeContainer";
import Logic from "../../logic";
// import Styles from './index.scss';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            value: "",
            showTree: false,
            handleData: null
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
        this.setState({[event.target.id]: event.target.value});
    };

    ok = () => {
        const value = this.state.value;
        const treeNodes = Logic(value);
        if (treeNodes) this.setState({showTree: true});
        this.setState({handleData: treeNodes});
    };

    render() {
        const {value, showTree, handleData} = this.state;
        return (
            <div>
                // <form id="article-form">
                //     <Input
                //         text="input number"
                //         label="value"
                //         type="text"
                //         id="value"
                //         value={value}
                //         handleChange={this.handleChange}
                //     />
                //     <button type="button" className="btn btn-primary" onClick={this.ok}>确定</button>
                // </form>
                {
                    showTree ? <div Class="col-xs-6 col-sm-3">
                        <TreeContainer data={handleData}></TreeContainer>
                    </div> : null
                }
            </div>
        );
    }
}

import { Button, Modal, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);


const wrapper = document.getElementById("binaryTree");
wrapper ? ReactDOM.render(<Main/>, wrapper) : false;

