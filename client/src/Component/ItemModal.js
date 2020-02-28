import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

import { addItem } from '../actions/itemAction';
import uuid from 'uuid'; 

class ItemModal extends Component {
    state = {
        modal : false,
        name: "",
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleItem = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name
        }

        this.props.addItem(newItem);

        this.toggle();
    }

    render() {
        return (
            <div>
                <Button color="dark" className="mb-5" onClick={this.toggle}>Add Item</Button> 
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add to Shopping List
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="item">Item</Label>
                                    <Input type="text" name="name" id="item" placeholder="add item" onChange={this.handleItem}/>
                                    <Button className="mt-3" color="dark" block>Add</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>           
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);
