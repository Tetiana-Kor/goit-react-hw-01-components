import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ avatar, name, isOnline }) {
  return (
    <>
      <span className={(s.status, isOnline ? s.online : s.offline)}>
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
