import { HiUser } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Avatar = () => (
  <>
    <Link
      to="profile"
      className="avatar"
    >
      <HiUser />
    </Link>
  </>
);

export default Avatar;
