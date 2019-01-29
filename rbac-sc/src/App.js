import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import rbac from './rbac-sc';

class App extends Component {

  state = {
    owner: '',
    orgName: ''

  //  players: [],
  //  balance: ''
  };

  async componentDidMount() {
    const owner = await rbac.methods.owner().call();
    const orgName = await rbac.methods.organizationName().call();
  //  const players = await rbac.methods.getPlayers().call();
  //  const balance = await web3.eth.getBalance(rbac.options.address);
    this.setState({ owner, orgName });
  }



  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload jason.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>
        <h2>RBAC-SC by Jason Cruz</h2>
        <p>The owner is managed by {this.state.orgName} with address:  {this.state.owner}.

        </p>
      </div>
    );
  }
}

//  There are currently {this.state.players.length} people entered
  // competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!

export default App;
