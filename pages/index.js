import React, { Component } from 'react';
import TopScorers from '../components/TopScorers';
import Results from '../components/Results';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    topScorers: [
      {
        playerId: 1,
        name: 'Joe Bloggs',
        goals: 0
      },
      {
        playerId: 2,
        name: 'Lionel Messi',
        goals: 5
      },
      {
        playerId: 3,
        name: 'Neil Dewing',
        goals: 19
      }
    ],
    results: [
      {
        matchId: 1,
        matchDate: new Date(2019, 9, 8),
        homeMatch: true,
        opponent: 'Leamington Juniors',
        ourScore: 3,
        opponentScore: 1,
        scorers: [1, 2, 2]
      },
      {
        matchId: 2,
        matchDate: new Date(2019, 9, 15),
        homeMatch: false,
        opponent: 'Long Itch Tigers',
        ourScore: 2,
        opponentScore: 1,
        scorers: [1, 1]
      }
    ]
  };

  updateScorerGoals = (event, id) => {
    const scorerIndex = this.state.topScorers.findIndex(p => p.playerId === id);
    const scorer = {
      ...this.state.topScorers[scorerIndex]
    };
    scorer.goals = event.target.value;
    const topScorers = [...this.state.topScorers];
    topScorers[scorerIndex] = scorer;
    this.setState({
      topScorers: topScorers
    });
  };

  render() {
    return (
      <>
        <h1>FootyScores</h1>
        <TopScorers topScorers={this.state.topScorers} changed={this.updateScorerGoals} />
        <Results results={this.state.results} />
        <h2>Next Match</h2>
      </>
    );
  }
}

export default Home;
