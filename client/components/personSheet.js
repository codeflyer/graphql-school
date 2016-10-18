import React from 'react';
import Relay from 'react-relay';

const styles = {
  container: {
    border: '1px solid red',
    padding: '10px',
    margin: '10px',
  }
};

class PersonSheetComponent extends React.Component {
  render() {
    const person = this.props.person;
    return (
        <div>
          <h1>Person Sheet</h1>
          <div style={styles.container}>
            <h3 >{person.name.first} {person.name.last}</h3>
            <h4 >{person.email}</h4>
            <h4 >{person.cell}</h4>
          </div>
        </div>
    );
  }
}

export const PersonSheet = Relay.createContainer(PersonSheetComponent, {
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