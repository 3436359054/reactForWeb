import React, {Component} from 'react'
import { Row, Col, Menu, Icon} from 'antd'
import axios from 'axios'
import {connect} from 'react-redux'
import {getHeaderListAction} from './actionCreator'
import {View as Footer} from '../commonWrapper/Footer'
import {browserHistory} from 'react-router'
import './style.css'
class CommonWrapper extends Component{
  render () {
    if (!this.props.common.isLoaded) {
      return (<div>{'loaded...'}</div>)
    } else {
      return (
        <div className='common'>
          <Row>
            <Col span={6}>
              <img className='common_logo' onClick={()=>{browserHistory.push('/')}} src={require('../../static/images/logo.jpg')} alt=""/>
            </Col>
            <Col span={18}>
              <Menu  mode="horizontal">
                { 
                  this.props.common.list.map((item, index) => (
                    <Menu.Item key={item.id}><Icon type="read" />{item.cst}</Menu.Item>
                  ))
                }
              </Menu>
            </Col>
          </Row>
          <div className="listContainer">{this.props.children}</div>
          <Footer></Footer>
        </div> 
      )
    }
  }
  componentDidMount () {
    this.getCommonInfo()
  }
  getCommonInfo () {
    axios.get('/api/common.json')
      .then(this.props.getheaderValue)
      .catch(this.handleCommonInfoErr.bind(this))
  }
  handleCommonInfoErr () {
    console.log('err')
  }
}
const mapStateToProps = (state) => {
  return {common: state.common}
}
const mapDispatchToProps = (dispatch) => {
  return {
    getheaderValue (res) {
      dispatch(getHeaderListAction(res.data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommonWrapper)