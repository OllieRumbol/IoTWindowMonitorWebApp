import React, { useState, useEffect, useContext } from "react";
import '../../Styling/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '../Home/Table';
import CommonTimeLabel from '../Home/CommonTimeLabel';
import Error from '../Shared/Error';
import Toggle from '../Home/Toggle';
import UserDetails from '../Home/UserDetails';
import {MyContext} from '../Shared/MyProvider';
import EventsControlButtons from '../Home/EventsControlButtons';

export default function WMHome() {
  const [results, setResults] = useState([]);
  const [commonTimeResults, setCommonTimeResults] = useState(null);
  const [showError, setShowError] = useState(false);
  const context = useContext(MyContext);

  //http://windowmonitorapi.azurewebsites.net/api/windowmonitor/commontime
  //https://localhost:44322/api/windowmonitor/commontime
  //https://localhost:44322/api/windowmonitor/toggle
  useEffect(() => {
    getUserEvents(context.id)
  }, [context.id]);

  function getUserEvents (id){
    fetch(
      'https://localhost:44322/api/windowmonitor/commontime/' + id,
      {
        method: "GET",
        headers: {
          'Accept': '*/*'
        },
      }
    )
      .then(res => res.json())
      .then(response => {
        setResults(response.list)
        setCommonTimeResults(response.commonTime)
      })
      .catch(
        error => setShowError(true)
      );
  }

  return (
    <div className="container fluid">
      <UserDetails/>
      <CommonTimeLabel res={commonTimeResults} />
      <Table res={results} />
      <Error show={showError} setShow={setShowError} title="Oh snap! You got an error!" message="We can't connect to the internet. Please check your connection." />
      <EventsControlButtons updateEvents={getUserEvents}/>
      <Toggle toggleValue={context.toggleValue} setToggleValue={context.setToggleValue} />
    </div>
  );
}