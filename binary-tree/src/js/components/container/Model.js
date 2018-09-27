import { Modal } from 'antd'
import React, { Component } from "react"

class InputModel extends Component {



    handleOk = (e) => {
        this.props.onShownModal(false)
    }


    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('---->', nextProps, prevState)
    //     if (nextProps.showModel && prevState.visible) {
    //         return {
    //             visible: true
    //         }
    //     }
    //     return null
    // }

    handleCancel = () => {
        // this.setState({
        //     visible: false,
        // })
        this.props.onShownModal(false)
    }



    render() {
        // const { visible } = this.state

        const { onShowModal, visible } = this.props

        return (
            <div>
                <Modal title = "请输入整数"
                       onOk = {this.handleOk}
                       onCancel = {this.handleCancel}
                       visible={visible}
                >

                </Modal>
            </div>
        )

    }
}

export default InputModel
