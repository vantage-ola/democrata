import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';

import Poll from 'react-polls';

const questions = "Is 2021 a better year than 2020?"
const answers = [ { option: 'Yes', votes: 23}, {option: 'No', votes: 12}]
const styles = {
	questionSeparator: false,
	questionSeparatorWidth: 'question',
	questionBold: false ,
	questionColor: '#5e68cc',  
	align: 'center',
	theme: 'purple'
}
class App extends Component {
	state = {
		answers: [...answers]
	}

	handleVote = voteAnswer => {
		const { answers } = this.state
		const newAnswers = answers.map(answer => {
		  if (answer.option === voteAnswer) answer.votes++
		  return answer
		})
		this.setState({
		  answers: newAnswers
		})
	}

	render () {
		const { answers } = this.state
		return (
			<>
			
			<Header/>
			<div className='center'>
				<Poll question={questions} answers={answers} onVote={this.handleVote} customStyles={styles}/>
			</div>
			<Footer/>
		  </>
		)
  }
};

export default App;
