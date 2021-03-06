import React, { Component } from 'react';
import ListIndex from '../list/ListIndex';
import { getBoard } from '../../APIs/boards';
import { DragDropContext} from "react-beautiful-dnd"
import { sort } from '../../APIs/lists'

export default class BoardShow extends React.Component {

	onDragEnd(){}
//   onDragEnd = (result) => {
//       //reordering logic
//     const {destination, source, draggableId} = result;

//     if(!destination){
//       return;
//     }
    
//     this.props.dispatch(
//       sort(
//         source.droppableId,
//         destination.droppableId,
//         source.index,
//         destination.index,
//         draggableId
//       )
//     )

//   }

	render() {
    
    const styles= {
      color: 'white',
    };

  	const title = this.props.title
  	const board_id = this.props.match.params.id

	  return (
      // <DragDropContext onDragEnd={this.onDragEnd()}>
      <div>
        <div className="m-3 w-100">
            <h3 style={styles}>{title}</h3>
            <div>
                <ListIndex 
                  board_id={board_id}
                />
            </div>
        </div>
      </div>
      //  </DragDropContext>     
	  );
	}
}
