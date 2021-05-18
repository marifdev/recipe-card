import React from "react";
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: props.isLiked,
      likeCount: props.likeCount
    }
  };

  like = () => {
    this.setState(({isLiked: true})); 
    this.setState((prevState) => ({ likeCount: prevState.likeCount + 1 }))
  };

  dislike = () => {
    this.setState(({isLiked: false})); 
    this.setState((prevState) => ({ likeCount: prevState.likeCount - 1 }))
  };

  render(){
    return (
      <div className="card">
        <div className="card-header">
          <div className="profile">
            <span className="letter">{this.props.author[0]}</span>
          </div>
          <div className="card-title-group">
            <h5 className="card-title">{this.props.title}</h5>
            <div className="card-date">{this.props.date}</div>
          </div>
        </div>
        <img className="card-image" src={this.props.image} alt="Logo" />
        <div className="card-text">{this.props.description}</div>
        <div className="card-like-bar">
          {this.state.isLiked ? (
            <img className="card-like-icon" src={heartFill} alt="Logo" onClick={this.dislike}/>
          ) : (
            <img className="card-like-icon" src={heartOutline} alt="Logo" onClick={this.like}/>
          )}
          <div className="like-text">
            <b>{this.state.likeCount}</b> kişi bu tarifi beğendi.
          </div>
        </div>
      </div>
    );
  }
}

