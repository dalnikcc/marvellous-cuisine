import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, FormControl } from 'react-bootstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser} from '@fortawesome/fontawesome-free-solid';
import { showAuthModal} from "Actions/authActions";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputVisible: false
    };
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleBodyClick);
  }

  handlerClickSearchButton = () => {
    this.setState({
      inputVisible: true
    })
  };

  handleBodyClick(e) {
    const searchInput = document.getElementsByClassName('search-input')[0];
    if (e.path.includes(searchInput)) return;
    this.setState({
      inputVisible: false
    })
  };

  render() {
    const { login } = this.props;
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={'/'}>Marvellous Cuisine</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href={'/'}>Home</NavItem>
          <NavItem eventKey={2} href={'/shop'}>Shop</NavItem>
          <NavItem eventKey={3} href={'/blog'}>Blog</NavItem>
          <NavItem eventKey={4} href={'/about'}>About us</NavItem>
        </Nav>
        {this.state.inputVisible
          ?
          <Nav pullRight className={'search-input'}>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={()=>{}}
            />
            <FontAwesomeIcon icon={faSearch} />
          </Nav>
          :
          <Nav pullRight>
            <NavItem eventKey={5} href="#" onClick={this.handlerClickSearchButton}>
              <FontAwesomeIcon icon={faSearch} />
              Search
            </NavItem>
            <NavItem eventKey={6} href="#">
              <FontAwesomeIcon icon={faShoppingCart}/>
              0 items
            </NavItem>
            <NavItem eventKey={7} href="#" onSelect={login} >
              <FontAwesomeIcon icon={faUser} />
              Login/Signup
            </NavItem>
          </Nav>
        }
      </Navbar>
    );
  }
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      return dispatch(showAuthModal());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);