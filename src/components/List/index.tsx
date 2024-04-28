import { memo } from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../services/jsonPlaceholder';

interface Props {
  items: User[];
}

const List = ({ items }: Props) => (
  <div>
    <h4>User List</h4>
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/UserInfo/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default memo(List);
