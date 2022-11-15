import { Component } from "react";

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      comment: "",
    };
  }

  componentDidMount() {
    this.setState({ id: this.props.videoId });
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({ name: "", comment: "" });
  };

  render() {
    return (
      <div>
        <h3>Comment Form </h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="your name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            placeholder="your comment"
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
