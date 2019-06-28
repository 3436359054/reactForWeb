import React, {Component} from 'react'
import { Row, Col } from 'antd';
export default class Home extends Component{
  render () {
    return (
      <div>
        <Row>
          <Col span={6}>login</Col>
          <Col span={18}>con</Col>
        </Row>
      </div> 
    )
  }
}