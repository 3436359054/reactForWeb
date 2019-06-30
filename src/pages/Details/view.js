import React,{ Component } from "react";

class Details extends Component {
  render () {
    return (
      <div>
        <video width="320" height="240" defaultPlaybackRate='2.0' controls>
          <source src={require("../../static/video/1.mp4")} type="video/mp4"/>
          {'浏览器不支持此格式'}
        </video>
      </div>
    )
  }
}
export default Details