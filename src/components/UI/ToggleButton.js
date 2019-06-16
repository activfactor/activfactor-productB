import React,{ Component } from "react";
import { connect } from 'react-redux';
import { toggleClicked } from '../../actions/index';

class ToggleButton extends Component {

    state = {
        Clicked:false,
    };

    onClickHandler = () => {
        this.props.toggleClicked(this.state.Clicked);
        this.setState(prevState => ({Clicked:!prevState.Clicked}));
    }

    render(){
        return (
                <div className={this.state.Clicked ? "burgerbutton--container change" : "burgerbutton--container"} onClick={this.onClickHandler}>
                    <div className="burgerbutton--bar1" />
                    <div className="burgerbutton--bar2" />
                    <div className="burgerbutton--bar3" />
                </div>  
          );
    } 
}

export default connect(null,{toggleClicked})(ToggleButton);
