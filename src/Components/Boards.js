import React, { Component } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Growl } from 'primereact/growl'

import BoardTable from './BoardTable'

class Boards extends Component {
  constructor(props) {
    super(props)
    console.log('props: ', props)
    this.state = {
      editingBoard: null,
    }
  }


  render() {
    const sheetBoards = this.props.boards ? this.props.boards.filter((board) => board.material === 'Sheet') : null
    const hardwoodBoards = this.props.boards ? this.props.boards.filter((board) => board.material === 'Hardwood') : null
    const dimensionalBoards = this.props.boards ? this.props.boards.filter((board) => board.material === 'Dimensional') : null
    return (
        <>
          <Accordion multiple={true}>
            <AccordionTab header="Sheet Goods">
              <BoardTable boards={sheetBoards} />
            </AccordionTab>
            <AccordionTab header="Hardwood">
              <BoardTable boards={hardwoodBoards} />
            </AccordionTab>
            <AccordionTab header="Dimensional">
              <BoardTable boards={dimensionalBoards} />
            </AccordionTab>
          </Accordion>

          <Growl ref={(el) => this.growl = el} />

          <br />
        </>
    )
  }
}

export default Boards
