import React, { useEffect, useContext } from "react";
import ToggleButton from 'react-toggle-button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {MyContext} from '../Shared/MyProvider';

export default function Toggle(props) {
    const context = useContext(MyContext);
    
    useEffect(() => {
        fetch(
          'https://localhost:44322/api/windowmonitorcustomerdetails/toggle/' + context.id,
          {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              toggle: context.toggleValue
            })
          }
        )
          .catch(
            
          );
      }, [context.id, context.toggleValue]);

    return (
        <div className="container fluid">
            <div className="form-inline">
                <h6 className="p-2">Enable SMS notifications</h6>
                <ToggleButton
                    value={props.toggleValue || false}
                    onToggle={(value) => {
                        props.setToggleValue(!value)
                    }} />
            </div>
        </div>
    )
}