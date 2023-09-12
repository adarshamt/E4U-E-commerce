import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import { Button } from 'react-bootstrap';


import SideNav, {
//   Toggle,
//   Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <>
      <SideNav expanded={this.state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="Add Products">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Add Product</NavText>
          </NavItem>

          <NavItem eventKey="your products">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Your Products</NavText>
          </NavItem>


        </SideNav.Nav>
      </SideNav>
        <Button style={{position:'absolute',top:'2%',left:'90%',width:'80px',height:'30px',textAlign:'center',padding:'0',backgroundColor:'#d73333'}}>Log out</Button>
      </>
    );
  }
}

export default SideNavBar;
