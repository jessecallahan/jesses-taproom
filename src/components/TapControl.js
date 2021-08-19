import React from 'react'
import TapList from './TapList'
import TapDetail from './TapDetail'

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
      formVisibleOnPage: false,
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


  render() {
    let leftSideCurrentlyVisibleState = null;
    // let buttonText = null;
    if (this.state.selectedTap != null) {
      leftSideCurrentlyVisibleState = <TapDetail tap={this.state.selectedTap} />
    } else {
      leftSideCurrentlyVisibleState = <TapList tapList={this.state.mainTapList} whenTapClicked={this.handleTapClick} />
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="column">
            {leftSideCurrentlyVisibleState}
          </div>
          <div className="column">
            yo yo
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TapControl;

