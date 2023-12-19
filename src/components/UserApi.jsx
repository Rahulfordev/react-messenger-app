/* eslint-disable react/prop-types */
const UserApi = ({ user }) => {
  const {
    name: { title, first, last },
    picture: { thumbnail },
  } = user;

  return (
    <div className="users__container">
      <div className="left__user--photo">
        <img src={thumbnail} alt="user-photo" />
      </div>
      <div className="left__user--content">
        <h4 className="left__user--name">
          {title} {first} {last}
        </h4>
        <p>{Math.round(Math.random() * 9) + 1}</p>
      </div>
    </div>
  );
};

export default UserApi;
