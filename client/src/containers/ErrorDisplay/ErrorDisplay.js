import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { hideError } from '../../store/slices/errorSlice';

import Modal from '../../components/UI/Modal/Modal';

const ErrorModal = styled(Modal)`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
`;

const ErrorText = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export class ErrorDisplay extends Component {
  handleModalClose = () => {
    this.props.hideError();
  };
  render() {
    return (
      <>
        <ErrorModal
          show={this.props.show}
          clickedBackdrop={this.handleModalClose}
        >
          <ErrorText>
            {this.props.error ? this.props.error : 'internal server error'}
          </ErrorText>
        </ErrorModal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error.error,
  show: state.error.show,
});

const mapDispatchToProps = (dispatch) => ({
  hideError: () => dispatch(hideError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDisplay);
