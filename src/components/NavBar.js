import React from "react";
import Logout from "./Logout.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <>
        {props.loggedIn ? (
          <Navbar bg="light">
            <Navbar.Brand>
              <h3>Task Assign</h3>
            </Navbar.Brand>
            <Nav>
              <LinkContainer to="/tasks/my-tasks">
                <Button variant="light"> My Tasks </Button>
              </LinkContainer>
              <LinkContainer to="/tasks/assigned">
                <Button variant="light"> Assigned Tasks </Button>
              </LinkContainer>
              <LinkContainer to="/tasks/completed">
                <Button variant="light"> Completed Tasks </Button>
              </LinkContainer>
            </Nav>
            <Nav>
              <Logout history={props.history} />
            </Nav>
          </Navbar>
        ) : (
          <Navbar className="bg-light justify-content-between">
            <Navbar.Brand>Task Assign</Navbar.Brand>
            <Nav>
              <LinkContainer to="/signup">
                <Button variant="light"> Sign Up </Button>
              </LinkContainer>
              <LinkContainer to="/login">
                <Button variant="light"> Login </Button>
              </LinkContainer>
            </Nav>
          </Navbar>
        )}
      </>
    </div>
  );
};

export default NavBar;
