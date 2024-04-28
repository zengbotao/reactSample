import { memo } from 'react';

import { User } from '../../services/jsonPlaceholder';

interface Props {
  item: User;
}

const Info = ({ item }: Props) => (
  <div>
    <h4>User Info</h4>
    <ul>
      <li>Name: {item.name}</li>
      <li>Phone: {item.phone}</li>
      <li>Email: {item.email}</li>
      <li>Website: {item.website}</li>
    </ul>
  </div>
);

export default memo(Info);
