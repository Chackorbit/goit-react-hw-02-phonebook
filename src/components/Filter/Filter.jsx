import s from './Filter.module.css';
import React from 'react';

export default class Filter extends React.Component {
  state = {};

  render() {
    return (
      <div className={s.container}>
        <label htmlFor="">
          <input
            type="text"
            name="filter"
            value={this.props.filter}
            onChange={this.props.saveFind}
          />
        </label>

        <ul>
          {this.props.contacts.map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // FeedbackOptions.propTypes = {
  //   options: propTypes.array,
  // };
}
