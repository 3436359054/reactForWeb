import React, {Component} from 'react'
import { List, Avatar, Icon } from 'antd'
import Axios from 'axios';
import { connect } from 'react-redux'
import {getHomeAction} from './actionCreator'
class Home extends Component {
  render () {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )
    return (
      <List
        itemLayout="vertical"
        pagination={true}
        dataSource={this.props.home.list}
        renderItem={item => (
          <List.Item
            key={item.title}
            //列表操作组(在底部)
            actions={[
              <IconText type="star-o" text="178" />,
              <IconText type="like-o" text="333" />,
              <IconText type="message" text="23" />,
            ]}
            //额外内容(在最右侧)
            extra={
              <img
                alt={'图片不存在'}
                width={272}
                src={item.imgUrl}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />} //内容的图标
              title={<a href={item.href}>{item.title}</a>} //内容的标题
              description={item.description} //内容的描述
            />
            {item.content} {/* 内容 */}
          </List.Item>
        )}
      />
    )
  }
  componentDidMount () {
    this.getHomeInfo()
  }
  getHomeInfo () {
    Axios.get('https://5d14aca10741a20014c59eb1.mockapi.io/api/home')
      .then(this.props.handleHomeAction)
      .catch(()=>console.log('homeErr'))
  }
}

const mapState = state => ({
  home: state.home
})
const mapDispatch = (dispatch) => ({
  handleHomeAction (res) {
    dispatch(getHomeAction(res.data))
  }
})
export default connect(mapState,mapDispatch)(Home)