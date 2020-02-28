import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Containner, ListGroup, ListGroupItem, Button, Container } from 'reactstrap';
import { CSSTransition,  TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

import { getItems, deleteItem } from '../actions/itemAction';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    handleDelete = (id) => {
        this.props.deleteItem(id);
        this.props.getItems();
    }
    
    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500}>
                                <ListGroupItem>
                                    <Button className="mr-2" color="danger" size="sm" onClick={() => {this.handleDelete(_id)}}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);