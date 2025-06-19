
import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';


const Students = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="Add-div">
                            <h1 className="text-center">Add Student</h1>

                            <Form>

                                <h1 className="text-center">Add Student</h1>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Frist Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder=" last Name" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>std</Form.Label>
                                        <Form.Control type="number" placeholder="Enter std" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="id" placeholder=" Enter id" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>student add from</div>
                    </div>







                    <div className="col-md-6"><Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>std</th>
                                <th>Address</th>
                                <th>State</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nilesh</td>
                                <td>Patil</td>
                                <td>te</td>
                                <td>Kasegaon</td>
                                <td>Maharashtra</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nilesh</td>
                                <td>patil</td>
                                <td>te</td>
                                <td>Kasegaon</td>
                                <td>Maharashtra</td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Nilesh</td>
                                <td>Patil</td>
                                <td>te</td>
                                <td>Kasegaon</td>
                                <td>Maharashtra</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Nilesh</td>
                                <td>Patil</td>
                                <td>te</td>
                                <td>Kasegon</td>
                                <td>Maharshtra</td>
                            </tr>
                        </tbody>
                    </Table></div>

                </div>
            </div>


        </div >
    )
}

export default Students
