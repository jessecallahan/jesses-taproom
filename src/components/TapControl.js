import React from 'react'
import TapList from './TapList'
import TapDetail from './TapDetail'
import NewTapForm from './NewTapForm'
import EditTapForm from './EditTapForm'

class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTapList: [{
        name: "Rainer",
        brand: "IPA",
        price: 4.00,
        pints: 5,
        alcohalContent: 5.0,
        amountMade: 0,
        id: 1
      }
      ],
      formVisibleState: "Home",
      selectedTap: null,
      editing: false
    };
  }
  handleTapClick = (id) => {
    const newMainTap = this.state.mainTapList.filter(tap => tap.id === id)[0]
    this.setState({
      selectedTap: newMainTap
    })
  }

  handleDetailClick = () => {
    this.setState(
      { selectedTap: null }
    )
  }
  handleFormClick = () => {
    if (this.state.formVisibleState === "Home") {
      this.setState(
        { formVisibleState: "New" }
      )
    } else {
      this.setState(
        { formVisibleState: "Home" }
      )
    }

  }
  handleEditClick = () => {
    this.setState(
      { formVisibleState: "Edit" }
    )
  }
  handleDeletingTap = (id) => {
    const newMainTapList = this.state.mainTapList.filter(tap => tap.id !== id);
    this.setState({
      mainTapList: newMainTapList,
      selectedTap: null,
      formVisibleState: "Home"
    });
  }


  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({
      mainTapList: newMainTapList,
      formVisibleState: "Home",
      selectedTap: null
    });
  }

  handleEditingTapInList = (TapToEdit) => {
    const editedMainTapList = this.state.mainTapList.filter(tap => tap.id !== this.state.selectedTap.id).concat(TapToEdit);
    this.setState({
      mainTapList: editedMainTapList,
      selectedTap: null,
      formVisibleState: "Home"
    });
  }

  handleSellingTapInList = (TapToEdit) => {
    const editedMainTapList = this.state.mainTapList.filter(tap => tap.id !== this.state.selectedTap.id).concat(TapToEdit);
    this.setState({
      mainTapList: editedMainTapList,
      selectedTap: TapToEdit
    });
  }

  render() {
    let leftSideCurrentlyVisibleState = null;
    let rightSideButtonText = null;
    let rightSideCurrentlyVisibleState = null;
    //left side conditional
    if (this.state.selectedTap != null) {
      leftSideCurrentlyVisibleState = <TapDetail sellButtonClick={this.handleSellingTapInList} deleteButtonClick={this.handleDeletingTap} editButtonClick={this.handleEditClick} tap={this.state.selectedTap} detailClick={this.handleDetailClick} onClickingEdit={this.handleEditClick} />
    } else {
      leftSideCurrentlyVisibleState = <TapList tapList={this.state.mainTapList} whenTapClicked={this.handleTapClick} />
    }
    //right side conditional
    if (this.state.formVisibleState === "New") {
      rightSideCurrentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />
      rightSideButtonText = "Go Back Home";
    } else if (this.state.formVisibleState === "Edit") {
      rightSideCurrentlyVisibleState = <EditTapForm tap={this.state.selectedTap} onEditTap={this.handleEditingTapInList} />
      rightSideButtonText = "Go Back Home";
    } else {
      rightSideCurrentlyVisibleState = <p>
        Welcome to the tap room. A place where you can see all your beautiful taps in a list. You can add taps, edit taps, delete taps, sell pints, and look at all your taps. To add a tap just click the button below. To edit a tap just click a tap in the list. To sell a pint click the button and to get back to the list just click the tap detail card. Enjoy!
      </p>
      rightSideButtonText = "Add a Tap"
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="column">
            {leftSideCurrentlyVisibleState}
          </div>
          <div className="column">
            {rightSideCurrentlyVisibleState}
            <button onClick={this.handleFormClick}> {rightSideButtonText}</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TapControl;

