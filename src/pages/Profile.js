import { useSelector } from 'react-redux';
import './Profile.css';

function Profile() {
  const missions = useSelector((state) => (state.missions.filter((mission) => mission.joined)));
  const rockets = useSelector((state) => (state.rockets.filter((rocket) => rocket.reserved)));

  return (
    <section className="profile-page-container container">
      <div>
        <h2>My Missions</h2>
        <ul className="items-list">
          {
            missions.map((mission) => (
              <li className="item" key={mission.id}>
                {mission.name}
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <h2>Rockets</h2>
        <ul className="items-list">
          {
            rockets.map((rocket) => (
              <li className="item" key={rocket.id}>
                {rocket.name}
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Profile;
