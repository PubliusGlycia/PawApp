import React, { Component } from 'react';
import { removeBoard } from '../../APIs/boards';
import { Button } from 'reactstrap';

export default class BoardDelete extends React.Component {

  handleClick = async () => {
    const board_id = this.props.board_id
    const boardToRemove = await removeBoard(board_id);
    this.props.removeBoardFromList(boardToRemove); 
  };

  render () {
    return (
      <Button 
        color="danger" 
        onClick={e =>
          window.confirm("Are you sure you wish to delete this board?") &&
          this.handleClick(e)
        }
        className="mt-2"
      >
        Delete
      </Button>
    );
  }
}