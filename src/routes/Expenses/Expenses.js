import React, { Component } from 'react';
import './Expenses.css';
import Modal from '../../components/Modal/Modal';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => {
      debugger;
      return {
        modalOpen: !prevState.modalOpen,
      };
    });
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <div>
        <button
          className="btn-add-expenses"
          disabled={this.state.modalOpen}
          onClick={this.toggleModal}
        >
          <span className="text">+</span>
        </button>
        {modalOpen && (
          <Modal
            header="Add new Expenses"
            footer={
              <React.Fragment>
                <button className="warn" onClick={this.toggleModal}>
                  CANCEL
                </button>
                <button className="primary" onClick={this.toggleModal}>
                  CONFIRM
                </button>
              </React.Fragment>
            }
            onClose={this.toggleModal}
          >
            <div>ciao</div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Expenses;
