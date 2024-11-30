import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from 'react-icons/fa'; // Importing user icon
import 'bootstrap/dist/css/bootstrap.min.css';
import './iconpersonal.css';

function Iconpersonal({ username, onLogout }) {
  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle
        id="dropdown-split-basic"
        className="iconpersonal-toggle"
        variant="link" // Removing background
      >
        <FaUserCircle size={24} className="iconpersonal-icon" /> {/* User icon */}
        <span className="iconpersonal-username">{username}</span> {/* Display dynamic username */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
        <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item> {/* Logout option */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Iconpersonal;
