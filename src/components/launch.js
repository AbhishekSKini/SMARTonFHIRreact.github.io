import React, { useState } from "react";
import FHIR from "fhirclient";
import './launch.css';

export default function Launch() {
    const [client_id, setclient_id] = useState('');
    console.log(client_id);
    function handleSubmit(event) {
        event.preventDefault();
        console.log("calling handleSubmit");
        FHIR.oauth2.authorize({
            'client_id': client_id,
            'scope': 'user/Patient.read user/Practitioner.read launch openid profile offline_access fhirUser',
            'redirect_uri': 'https://abhishekskini1317.github.io/SmartonFhirReact.github.io/redirect'
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div id="clientid">
                    <label>Enter your client ID :</label>
                    <input type='text' name='client_id' onChange={e => setclient_id(e.target.value)} />
                    <button type='submit' >Get FHIR Data</button>
                </div>
            </form>
        </>
    )
}