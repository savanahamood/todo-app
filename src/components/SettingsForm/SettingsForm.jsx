import React, { useState } from 'react';
import { useSettingsContext } from '../../Context/Settings/SettingsContext';
import { Card, Grid } from '@mantine/core';
import './settingForm.scss';

const SettingsForm = () => {
  const { settings, setSettings } = useSettingsContext();
  const [newSettings, setNewSettings] = useState(settings);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === 'checkbox' ? checked : parseInt(value);

    setNewSettings((prevSettings) => ({
      ...prevSettings,
      [name]: name === 'hideTheCompleted' ? checked : updatedValue,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSettings(newSettings);
  };

  return (
    <>
    <div className="settings-container">

      <div className="login-box">
        <h2>Settings</h2>
        <form onSubmit={handleSubmit}>

          <div class="user-box">

            <input
              type="number"
              name="numOfItem"
              value={newSettings.numOfItem}
              onChange={handleInputChange}
            />
            <label>Items Per Page</label>

          </div>
          <div class="userbox">
            <input
              type="checkbox"
              name="hideTheCompleted"
              checked={newSettings.hideTheCompleted}
              onChange={handleInputChange}
            />
            <label>Show Completed tasks</label>
          </div>
          {/* <button type="submit" onSubmit={handleSubmit}> Save Settings</button> */}

          <button type="submit" onSubmit={handleSubmit} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            save Settings
          </button>
        </form>

      </div>
      <div className='det'>


        <form >


          <h2>Updated Settings</h2>
          <p>Show completed tasks: {newSettings.hideTheCompleted.toString()}</p>
          <p>Tasks per page: {newSettings.numOfItem}</p>

        </form>
      </div>



</div>

      {/* <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <span>Show completed items:</span>
                <input
                  type="checkbox"
                  name="hideTheCompleted"
                  checked={newSettings.hideTheCompleted}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                <span>Items per page:</span>
                <input
                  type="number"
                  name="numOfItem"
                  value={newSettings.numOfItem}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <button type="submit" onSubmit={handleSubmit}> Save Settings</button>
          </form> */}

      {/* <div className="settings-preview">
        <Card shadow="sm">
          <h2>Updated Settings</h2>
          <p>Show completed items: {newSettings.hideTheCompleted.toString()}</p>
          <p>Items per page: {newSettings.numOfItem}</p>
        </Card>
      </div> */}






    </>
  );
};

export default SettingsForm;