import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';

export class Controls extends Component {
  render() {
    return <Layout> </Layout>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
