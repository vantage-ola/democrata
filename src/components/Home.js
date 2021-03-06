import React, { Component } from 'react';

import { Footer } from './Footer';
import Grid from './Grid';

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
class Home extends Component {
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
	componentDidMount() {
		const { answers } = this.state
		this.addRandomVote(answers)
	}
	addRandomVote = (answers) => {
		setTimeout(() => {
			const ranAnswer = parseInt(Math.random() * 2, 10)
			this.handleVote(answers[ranAnswer].option, answers)
			this.addRandomVote(answers)
		}, Math.random() * 7000)
	}


	render () {
		const { answers } = this.state

		return (
			<>
			<Grid header="Feautured Poll"></Grid>

			<div className='center'>
				<Poll question={questions} answers={answers} onVote={this.handleVote} customStyles={styles}/>
			</div>
			<Footer/>
		  </>
		)
  }
};

export default Home;
