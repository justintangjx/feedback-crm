import React, { Component } from "react";
import { feedbackList } from "../../utils/seedData";
import FeedbackHistory from "../feedbackHistory/feedbackHistory";
import FeedbackFormImprov from '../feedbackForm/feedbackFormImprov';

class FeedbackBoxImprov extends Component {
  constructor() {
    super();
    this.state = {
      feedbackList: feedbackList,
      newFeedback: { action: " ", improvement: "" }
    };
  }

  saveFeedback(event) {
    this.setState({
      newFeedback: {
        action: event.target.value,
        improvement: event.target.value
      }
    });
  }

  handleDelete(feedbackToBeDeleted) {
    let newFeedbackListAfterDelete = this.state.feedbackList.filter(
      feedback => feedback !== feedbackToBeDeleted
    );
    this.setState({ feedbackList: newFeedbackListAfterDelete });
  }

  render() {
    return (
      <div id="feedbackHistory">
      <br />
        <FeedbackFormImprov
          saveFeedback={this.saveFeedback.bind(this)}
          newFeedback={this.state.newFeedback}
          addFeedback={this.addFeedback.bind(this)}
        />
        <p className="p-3 mb-2 bg-secondary text-white text-center">
          <strong>
            <em> What didn't go so well this week</em>{" "}
          </strong>
        </p>
        <FeedbackHistory
          feedbackList={this.state.feedbackList}
          handleDelete={this.handleDelete.bind(this)}
        />
      </div>
    );
  }

  addFeedback(actionValue, improvementValue) {
    const exampleFeedback = {
      id: this.state.feedbackList.length + 1,
      action: actionValue,
      improvement: improvementValue
    };

    this.setState({
      feedbackList: this.state.feedbackList.concat([exampleFeedback])
    });
  }
}

export default FeedbackBoxImprov;
