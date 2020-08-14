import React, { Component } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'

class BoardTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingBoard: null
    }
  }

  // Row Edit Functions
  onRowEditInit = (event) => {
    const board = {...event.data}
    this.setState({editingBoard: board})
  }

  onRowEditSave = async (event) => {
    //await this.props.saveBoard(this.state.editingBoard)
    this.setState({editingBoard: null})
    this.growl.show({severity: 'success', summary: 'Saved', detail: 'Board has been updated'})
  }

  onRowEditCancel = (event) => {
    this.setState({
        editingBoard: null
    })
  }

// Editor control functions
  updateProperty = (property, value) => {
    const board = {...this.state.editingBoard, [property]: value}
    this.setState({
      editingBoard: board
    })
  }

  // Editors
  textEditor = (props) => {
    return <InputText type="text" value={this.state.editingBoard[props.field]} onChange={(e) => this.updateProperty(props.field, e.target.value)} />
  }

  render() {
    return (
            <DataTable
            value={this.props.boards}
            paginator={true}
            rows={15}
            rowHover={true}
            autoLayout={true}
            dataKey="id"
            editMode="row"
            onRowEditInit={this.onRowEditInit}
            onRowEditSave={this.onRowEditSave}
            onRowEditCancel={this.onRowEditCancel}
          >
            <Column field="label" header="Label" sortable={true} body={this.textTemplate} editor={this.textEditor} />
            <Column field="name" header="Name" sortable={true} editor={this.textEditor} />
            <Column field="roughThickness" header="Rough Thickness" sortable={true} editor={this.textEditor} />
            <Column field="roughLength" header="Rough Length" sortable={true} editor={this.textEditor} />
            <Column field="roughWidth" header="Rough Width" sortable={true} editor={this.textEditor} />
            <Column field="finalThickness" header="Final Thickness" sortable={true} editor={this.textEditor} />
            <Column field="finalLength" header="Final Length" sortable={true} editor={this.textEditor} />
            <Column field="finalWidth" header="Final Width" sortable={true} editor={this.textEditor} />
            <Column field="shaping" header="Shaping" sortable={true} editor={this.textEditor} />
            <Column field="joinery" header="Joinery" sortable={true} editor={this.textEditor} />
            <Column rowEditor={true} bodyStyle={{width: '5em', textAlign: 'right'}}/>
          </DataTable>
    )
  }
}

export default BoardTable