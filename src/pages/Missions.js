import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missions';
import './Missions.css';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, []);

  return (
    <section className="container">
      <h2>Missions</h2>
      <table className="missionTable">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {
          missions.map((mission) => (
            <tr key={mission.id}>
              <td>
                {mission.name}
              </td>
              <td className="font-sm">
                {mission.description}
              </td>
              <td className="mission-status-cell">
                <span className="status-badge">
                  Not a member
                </span>
                <button
                  type="button"
                  className="action-button"
                  onClick={() => dispatch(joinMission(mission.id))}
                >
                  Join Mission
                </button>
              </td>
            </tr>
          ))
        }
      </table>
    </section>
  );
}
