import React, { Component } from "react";

class Navbar extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    //     event.preventDefault();
    //     const name = this.inputRef.current.value;
    //     name && this.props.onAdd(name);
    //     // this.inputRef.current.value = '';
    //     this.formRef.current.reset();
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <i className="fab fa-youtube"></i>
          <span>Youtube</span>
          <form
            ref={this.formRef}
            className="add-form"
            onSubmit={this.onSubmit}
          >
            <input
              type="text"
              ref={this.inputRef}
              className="add-input"
              placeholder="Search.."
            />
            <button className="add-button">Add</button>
          </form>
        </nav>
      </>
    );
  }
}

export default Navbar;
