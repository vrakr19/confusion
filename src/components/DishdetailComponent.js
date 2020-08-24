import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import React, { Component } from "react";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    if (comments) {
      let options = { year: "numeric", month: "short", day: "numeric" };
      return comments.map((comment) => (
        <ul className="list-unstyled">
          <li className="mb-2">{comment.comment}</li>
          <li>
            -- {comment.author}{" "}
            {new Date(comment.date).toLocaleDateString("en-US", options)}
          </li>
        </ul>
      ));
    } else {
      return <div></div>;
    }
  }

  render() {
    const { dish } = this.props;
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
