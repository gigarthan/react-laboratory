import React, { Component } from 'react';
import SampleCenterTableWrapper from './SampleCenterManager/sampleCenterTableWrapper';
//import SampleCenterTypeTableWrapper from './SampleCenterManager/sampleCenterTypeTableWrapper';

export default class SampleCenterManagerWrapper extends Component {
  render() {
    return (
      <div>
        <SampleCenterTableWrapper />
          {/*<SampleCenterTypeTableWrapper/>*/}
      </div>


    )
  }
}
