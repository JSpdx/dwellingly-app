import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Icon from '../../components/icon/Icon';
import Input from '../../components/input/Input';
import Navigation from '../../components/navigation/Navigation';
import { properties, tenants } from '../../data'
import './PropertyManagerDetailsTwo.scss';


class PropertyManagerDetailsTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return(
      <div className="admin page">
        <Header>
          {() => (
            <div>
              <Navigation />
              <Header.Label
                label="JOIN Messenger Administration"
                type="basic"
                />
            </div>
          )}
        </Header>
        <div>
          <div className="width-wrapper">
            <div className="name-header">
              <h2 className="admin--header align--left">
                John Oliver
              </h2>
              <a
                href='/'
                id="archive-button"
                className="btn btn--strong">
                <Icon icon="archive" />Archive
                </a>
              </div>
              <section className="contactDetailsSection">
                <form className="contactDetailsForm">
                  <h2 className="detailSectionHeading" id="contactHeading">Contact</h2>
                  <Input
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="John"
                    onChange={this.handleChange}
                    />
                  <Input
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Oliver"
                    onChange={this.handleChange}
                    />
                  <Input
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    type="text"
                    placeholder="(503) 123-1234"
                    onChange={this.handleChange}
                    />
                </form>
              </section>
              <section>
                <h2 className="detailSectionHeading">Properties</h2>
                <div className="cardContainer">
                  {properties && properties.map(property => {
                    const { name, address} = property;
                    return(
                      <div className="propertyCard">
                        <ul>
                          <li className="cardName">{name}</li>
                          <li>{address}</li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </section>
              <section>
                <h2 className="detailSectionHeading">Tenants</h2>
                <div className="cardContainer">
                  {tenants && tenants.map(tenant => {
                    const { name, phone, address} = tenant;
                    return(
                      <div className="tenantCard">
                        <ul className="test">
                          <li className="cardName">{name}</li>
                          <li>{phone}</li>
                          <li>{address}</li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      )
    }
  }

  export default PropertyManagerDetailsTwo;
