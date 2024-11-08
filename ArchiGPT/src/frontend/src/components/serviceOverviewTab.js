import React from 'react';
import { Row, Accordion, Card, Button } from 'react-bootstrap';


function ServiceOverviewTab({ services, getStatusIcon, servicesInfo, resetItemSelected }) {

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
									{ servicesInfo[serviceIndex] ? <span style={{ ...getServiceTypeColor(servicesInfo[serviceIndex].type), padding: '2px', border: '1px solid', borderRadius: '5px' }}>{servicesInfo[serviceIndex].type}</span> : <></>}
									</div>
								</Row>
								</Accordion.Header>
								<Accordion.Body>
									<Card>
										<Button
											variant="light"
											onClick={() => {resetItemSelected("Service", {service: service.name, assistant: "ServiceDescriptionGenerator"})}}
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
											onClick={() => {resetItemSelected("Service", {service: service.name, assistant: "ServiceSpecificationGenerator"})}}
											disabled={service.ServiceSpecificationGenerator === "NO"} 
										>
											<Card.Body>
												Specifications {getStatusIcon(service.ServiceSpecificationGenerator)}
											</Card.Body>
										</Button>
									</Card>

									{service.ServiceEndpointGenerator ? 
										<Card>
											<Button
												variant="light"
												onClick={() => {resetItemSelected("Service", {service: service.name, assistant: "ServiceEndpointGenerator"})}}
												disabled={service.ServiceEndpointGenerator === "NO"} 
											>
												<Card.Body>
													Endpoints {getStatusIcon(service.ServiceEndpointGenerator)}
												</Card.Body>
											</Button>
										</Card>
									: <></>}
									
									{service.ServicePageGenerator ? 
										<Card>
											<Button
												variant="light"
												onClick={() => {resetItemSelected("Service", {service: service.name, assistant: "ServicePageGenerator"})}}
												disabled={service.ServicePageGenerator === "NO"} 
											>
												<Card.Body>
													Pages {getStatusIcon(service.ServicePageGenerator)}
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
		</Accordion>
    );
}

export default ServiceOverviewTab;
