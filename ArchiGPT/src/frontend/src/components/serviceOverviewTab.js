import React from 'react';
import { Container, Row, Accordion, Card, Button } from 'react-bootstrap';


function ServiceOverviewTab({ services, getStatusIcon, servicesInfo }) {

    const getServiceTypeColor = (type) => {
        switch (type) {
            case "backend":
                return { color: "red", borderColor: "red" };
            case "frontend":
                return { color: "blue", borderColor: "blue" };
            case "database":
                return { color: "green", borderColor: "green" };
            default:
                return { color: "grey", borderColor: "grey" };
        }
    };

    return (
		<Accordion defaultActiveKey="0">
			{ services.length !== 0 ?
				<Accordion.Item>
					<Accordion.Header>
						<div style={{ textAlign: 'center', width: '100%' }}>
							Services List
						</div>
					</Accordion.Header>
					<Accordion.Body>
						<Accordion defaultActiveKey="0">
							{services.map((service, serviceIndex) => (
								<Accordion.Item eventKey={serviceIndex} key={service.name}>
									<Accordion.Header>
									<Row className="align-items-center">
										<div className="col">
											<span className="mr-2">{service.name}</span>
										</div>
										<div className="col-auto">
										{/* <span style={{ ...getServiceTypeColor(servicesInfo[serviceIndex].type), padding: '2px', border: '1px solid', borderRadius: '5px' }}>{servicesInfo[serviceIndex].type}</span> */}

										</div>
									</Row>
									</Accordion.Header>
									<Accordion.Body>
										<Card>
											<Button
												variant="light"
												onClick={() => { /*TODO: update messageView based on servicesInfo[serviceIndex].description */}}
												disabled={service.description === "NO"} 
											>
												<Card.Body>
													Description {getStatusIcon(service.description)}
												</Card.Body>
											</Button>
										</Card>
										<Card>
											<Button
												variant="light"
												onClick={() => { }}
												disabled={service.specifications === "NO"} 
											>
												<Card.Body>
													Specifications {getStatusIcon(service.specifications)}
												</Card.Body>
											</Button>
										</Card>

										{service.endpoints ? 
											<Card>
												<Button
													variant="light"
													onClick={() => { }}
													disabled={service.endpoints === "NO"} 
												>
													<Card.Body>
														Endpoints {getStatusIcon(service.endpoints)}
													</Card.Body>
												</Button>
											</Card>
										: <></>}
										
										{service.pages ? 
											<Card>
												<Button
													variant="light"
													onClick={() => { }}
													disabled={service.pages === "NO"} 
												>
													<Card.Body>
														Pages {getStatusIcon(service.pages)}
													</Card.Body>
												</Button>
											</Card>
										: <></>}
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</Accordion.Body>
				</Accordion.Item>
			: <Container/> }
		</Accordion>
    );
}

export default ServiceOverviewTab;