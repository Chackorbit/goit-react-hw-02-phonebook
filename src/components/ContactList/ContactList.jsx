import s from './ContactList.module.css';
import { nanoid } from 'nanoid';
import React from 'react';

export default class ContactList extends React.Component {
  state = {};

  render() {
    return (
      <div className={s.container}>
        <label className={s.label}>Find by name</label>

        <input
          className={s.input}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.onSaveFind}
        />

        <ul className={s.ul}>
          {this.props.findByName().map(el => (
            <li className={s.li} key={nanoid()}>
              {el.name}: {el.number}
              <button onClick={() => this.props.deleteContact(el.id)}>
                del
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// Statistics.propTypes = {
//   good: propTypes.number,
//   neutral: propTypes.number,
//   bad: propTypes.number,
// };
