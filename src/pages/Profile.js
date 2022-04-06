import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import './Profile.css';

function Profile() {
  const missions = useSelector((state) => (state.missions));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, []);

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
    </section>
  );
}

export default Profile;
