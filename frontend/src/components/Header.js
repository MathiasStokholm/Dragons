import React from 'react'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        // Function to close the navigation bar if expanded (on mobile)
        const closeIfNeeded = () => {
            if (this.state.isOpen) this.toggle();
        };

        return (
            <Navbar color="dark" className="navbar-dark" expand="md" style={{marginBottom: '5px'}}>
                <NavbarBrand tag={Link} to="/">2770 Dungeons</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/spells" onClick={closeIfNeeded}>Spells</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/feats" onClick={closeIfNeeded}>Feats</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/initiative" onClick={closeIfNeeded}>Initiative</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/map" onClick={closeIfNeeded}>Map</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

Header.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default withRouter(Header)
