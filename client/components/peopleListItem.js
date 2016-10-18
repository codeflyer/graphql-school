import React from 'react';
import Relay from 'react-relay';
import { Link }from 'react-router';

const styles = {
  container: {
    border: '1px solid red',
    padding: '10px',
    margin: '10px',
  }
};

export class PeopleListItemComponent extends React.Component {
  render() {
    const person = this.props.person;
    return (
        <div style={styles.container}>
          <h3 >{person.name.first} {person.name.last}</h3>
          <h4 >{person.email}</h4>
          <h4 >{person.cell}</h4>
          <div><Link to={`/person/${person.id}`} >Details</Link></div>
        </div>
    );
  }
}

export const PeopleListItem = Relay.createContainer(PeopleListItemComponent, {
  fragments: {
    person: () => Relay.QL`
      fragment on person {
        id
        name {
          first
          last
        }
        email
        cell
      }
    `
  }
});
