/* eslint-disable react/prop-types */
const UserApi = ({ user }) => {
  const {
    name: { title, first, last },
  } = user;
  return (
    <div>
      <h4>{(title, first, last)}</h4>
    </div>
  );
};

export default UserApi;
