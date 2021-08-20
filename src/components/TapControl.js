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
        pints: 124,
        alcohalContent: 5.0,
        amountMade: 0
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

  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({
      mainTapList: newMainTapList,
      formVisibleState: "Home",
      selectedTap: null
    });
  }

  render() {
    let leftSideCurrentlyVisibleState = null;
    let rightSideButtonText = null;
    let rightSideCurrentlyVisibleState = null;
    //left side conditional
    if (this.state.selectedTap != null) {
      leftSideCurrentlyVisibleState = <TapDetail tap={this.state.selectedTap} detailClick={this.handleDetailClick} />
    } else {
      leftSideCurrentlyVisibleState = <TapList tapList={this.state.mainTapList} whenTapClicked={this.handleTapClick} />
    }
    //right side conditional
    if (this.state.formVisibleState === "New") {
      rightSideCurrentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />
      rightSideButtonText = "Go Back Home";
    } else if (this.state.formVisibleState === "Edit") {
      rightSideCurrentlyVisibleState = <EditTapForm />
      rightSideButtonText = "Go Back Home";
    } else {
      rightSideCurrentlyVisibleState = <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

