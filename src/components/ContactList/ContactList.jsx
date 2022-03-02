import s from './ContactList.module.css';
import { nanoid } from 'nanoid';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default class ContactList extends React.Component {
  state = {};

  render() {
    const fullList = this.props.findByName();
    console.log(fullList.length);
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
          {fullList.length < 1 ? (
            <p>We dont have contacts</p>
          ) : (
            fullList.map(el => (
              <li className={s.li} key={nanoid()}>
                {el.name}: {el.number}
                <button
                  className={s.btnDelete}
                  onClick={() => this.props.deleteContact(el.id)}
                >
                  <AiOutlineClose />
                </button>
              </li>
            ))
          )}
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
