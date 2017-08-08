import React from 'react';
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
import helper from "../utils/helpers"
import CurrentEventsList from "../components/CurrentEventsList"
import Graph from '../components/graphComponent'
import PastEventsList from "../components/pastEventsList"

class Home extends React.Component{

	constructor(){
		super();

		this.state= {
		
			currentEvents: [],
			pastEvents: []


		}


	}



//--------------------------------

	componentDidMount(){
		console.log("Component Mounted");


			

		helper.getCurrentEvents()
			.then(function(response){
				// var newEvents=this.state.events
				// newEvents.push(response.data)
					this.setState({
						currentEvents: response.data				
					});
				console.log(response)
			}.bind(this));


		helper.getPastEvents()
			.then(function(response){
				// var newEvents=this.state.events
				// newEvents.push(response.data)
					this.setState({
						pastEvents: response.data				
					});
				console.log(response)
			}.bind(this));

		}





	render(){
		return(
				<Grid fluid>
					<Row bsClass="row">
						<Col bsClass="col" xs={12}>
							<PageHeader><small className="titles">Current Events</small></PageHeader>
							<CurrentEventsList currentEvents={this.state.currentEvents} editEvent={this.props.editEvent} editOption={this.props.editOption}/>
						</Col>
					</Row>
					<Row bsClass="row">
						<Col bsClass="col" xs={12}>
							<PageHeader><small className="titles">Past Events</small></PageHeader>
							<PastEventsList pastEvents={this.state.pastEvents}/>
						</Col>
					</Row>
					<Row bsClass='row'>
						
					</Row>
				</Grid>
		
		)
	}
}

export default Home;