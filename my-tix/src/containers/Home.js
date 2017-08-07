import React from 'react';
import { Button, Row, Col, ListGroupItem, PageHeader, Grid, Modal } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
import helper from "../utils/helpers"
import CurrentEventsList from "../components/CurrentEventsList"
import Graph from '../components/graphComponent'

class Home extends React.Component{

	constructor(){
		super();

		this.state= {
		
			show3: false,
			events: [],


		}


	}


    showModal3 = () => {
    this.setState({show3: true});
	  }

	  hideModal3 =() => {
	    this.setState({show3: false});
	  }
//--------------------------------
//--------------------------------

	componentDidMount(){
		console.log("Component Mounted");


			

		helper.getEvents()
			.then(function(response){
				// var newEvents=this.state.events
				// newEvents.push(response.data)
					this.setState({
						events: response.data				
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
							<CurrentEventsList currentEvents={this.state.events} editEvent={this.props.editEvent} editOption={this.props.editOption}/>
						</Col>
					</Row>
					<Row bsClass="row">
						<Col bsClass="col" xs={12}>
							<PageHeader><small className="titles">Past Events</small></PageHeader>
							<ListGroup>
								<ListGroupItem>
									<Row bsClass="row">
										<Col bsClass="col" xs={8}>
											<h4>Event Name</h4>
										</Col>
										<Col bsClass="col" xs={4}>
											<Button onClick={this.showModal3} block>View Data</Button>
												<Modal
								          show={this.state.show3}
								          onHide={this.hideModal3}>
													<Modal.Header>
														<Modal.Title>Data</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														<Graph /> 
													</Modal.Body>
													<Modal.Footer>
														<Button onClick={this.hideModal3}>Close</Button>
													</Modal.Footer>	
												</Modal>
										</Col>
									</Row>
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
					<Row bsClass='row'>
						
					</Row>
				</Grid>
		
		)
	}
}

export default Home;