import React, { Component } from 'react';
import Scorer from './Scorer';

class TopScorers extends Component {
  render() {
    return this.props.topScorers
      .sort((a, b) => b.goals - a.goals)
      .map(scorer => {
        return <Scorer key={scorer.playerId} scorer={scorer} changed={event => this.props.changed(event, scorer.playerId)} />;
      });
  }
}

export default TopScorers;
