import { useEffect, useState } from 'react';

const Profile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <section className="profile">
      {loading
        && (
        <h3
          className="loading"
          style={{
            animationName: 'loading',
          }}
        >
          Checking your profile...
        </h3>
        )}
      {!loading
      && (
      <h2
        className="underConstruction"
      >
        Under construction...

      </h2>
      )}
    </section>
  );
};

export default Profile;
