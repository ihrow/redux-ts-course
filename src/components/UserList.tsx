import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const UserList: FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  return (
    <div>

    </div>
  );
};

export default UserList;