import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Logic from "../../logic"
class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            value: "",
            showTree: false
        };

    }

    /**
     * https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
     *  When you need to handle multiple controlled input elements, you can add a name attribute to each element and
     *  let the handler function choose what to do based on the value of event.target.name.
     *  // arrow function
     *  https://stackoverflow.com/questions/41398645/unable-to-use-arrow-functions-inside-react-component-class
     */
    handleChange = (event) =>  {
        this.setState({ [event.target.id]: event.target.value });
    }

    ok = () => {
        const value = this.state.value
        const treeNodes = Logic(value)
        if (treeNodes) this.setState({showTree: true})
        console.log(JSON.stringify(treeNodes))
    }

    render() {
        const { value, showTree} = this.state;
        return (
            <div>
                <form id="article-form">
                    <Input
                        text="SEO title"
                        label="value"
                        type="text"
                        id="value"
                        value={value}
                        handleChange={this.handleChange}
                    />
                    <button type="button" className="btn btn-primary" onClick={this.ok}>确定</button>
                </form>
                {showTree ? <div>
                    123
                </div>:
                null}
            </div>
        );
    }
}

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

