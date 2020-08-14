import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { MyContext } from '../Shared/MyProvider';

export default function EventsControlButtons(props) {
    const context = useContext(MyContext);

    function updateEvents() {
        props.updateEvents(context.id);
    }

    function clearEvents() {
        fetch(
            'https://localhost:44322/api/windowmonitor/' + context.id,
            {
                method: "DELETE",
                headers: {
                    'Accept': '*/*'
                },
            }
        )
            .then(response => {
                updateEvents();
            })
            .catch(
                
            );
    }

    return (
        <div className="container">
            <Button variant="danger" className="float-right" onClick={clearEvents}>Clear events</Button>
            <Button variant="primary" className="float-right mr-3" onClick={updateEvents}>Refresh events</Button>
        </div>
    )
}