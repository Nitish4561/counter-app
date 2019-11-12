import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     // count: 0   initial value for experimentation
  //     value: this.props.counter.value
  //     // imageUrl: "https://picsum.photos/200"
  //     // tags: ["tag1", "tag2", "tag3"]
  //   removed as the single source of truth should be the parent only};

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   },
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {
  //     return console.log("Increment clicked", this);
  //   }
  //   handleIncrement = product => {
  //     this.setState({ value: this.state.value + 1 });

  //    removed from here as there is no state here, the state is moved tp parent for keeping the single source of truth};
  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button> */}
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
