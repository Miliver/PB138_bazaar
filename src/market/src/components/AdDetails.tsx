import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { AdStore } from "../stores/AdStore";
import {
  Container,
  Grid,
  Paper,
  GridList,
  GridListTile,
} from "@material-ui/core";
import "./../styles/App.scss";


interface RouteParams {
  id: string;
}

export class AdDetails extends Component<RouteComponentProps<RouteParams>> {
  render() {
    const { name } = this.props.location.state;
    const { description } = this.props.location.state;
    const { price } = this.props.location.state;
    const { date } = this.props.location.state;
    const { contact_name } = this.props.location.state;
    const { contact_surname } = this.props.location.state;
    const { contact_email } = this.props.location.state;
    const { contact_phone } = this.props.location.state;
    const { contact_city } = this.props.location.state;
    const { image } = this.props.location.state;
    return (
      <Container maxWidth="md">
        <Paper elevation={3} className="add-detail">
          <div className="add-detail-wrapper">
            <h1>{name}</h1>
            <hr />
            <p>{description}</p>
            <h2>Price:</h2>
            <p>{price} Kč</p>
            <h2>Published on:</h2>
            <p>{date.toLocaleString("en-US")}</p>
            <h2>Contact details:</h2>
            <div>
              Name: {contact_name} {contact_surname}
            </div>
            <div>Email: {contact_email}</div>
            <div>Tel: {contact_phone}</div>
            <div>City: {contact_city}</div>
          </div>

   
            <GridList cellHeight={500}>
              
                <GridListTile>
                  <img src={image} alt="blabla" />
                </GridListTile>
             
            </GridList>
      


        </Paper>
      </Container>
    );
  }

  async componentDidMount() {}
}
