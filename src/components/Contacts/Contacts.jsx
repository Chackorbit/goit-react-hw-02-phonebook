import propTypes from 'prop-types';
import s from './Contacts.module.css';
import { nanoid } from 'nanoid';

export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(el => (
        <li key={nanoid()}>{el}</li>
      ))}
    </ul>
  );
}
// Statistics.propTypes = {
//   good: propTypes.number,
//   neutral: propTypes.number,
//   bad: propTypes.number,
// };
