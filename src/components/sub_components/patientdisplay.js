import { useEffect, useState } from "react";
import LoadingSpinner from "../spinner.js";

export default function Patientdisplay({ myAppSmart }) {
  console.log("Props" + myAppSmart);
  const [loading, setLoading] = useState(true);
  const [patientResponse, setPatientResponse] = useState({});
  useEffect(() => {
    patientRequests(myAppSmart);
  }, [])

  async function patientRequests(myAppSmart) {
    await fetch(myAppSmart.state.serverUrl + "/Patient/" +
      myAppSmart.patient.id, {
      headers: {
        "Accept": "application/json+fhir",
        "Authorization": "Bearer " + myAppSmart.state.tokenResponse.access_token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPatientResponse(data);
        setLoading(false);
      })
  }
  console.log(patientResponse);

  var firstName = patientResponse.name ? (patientResponse.name[0].given || 'Nil') : 'Nil';
  var lastName = patientResponse.name ? (patientResponse.name[0].family || 'Nil') : 'Nil';
  var mobile = patientResponse.telecom ? (patientResponse.telecom[0].value || 'Nil') : 'Nil';
  var language = patientResponse.communication ? (patientResponse.communication[0].language.text || 'Nil') : 'Nil';
  var gender = patientResponse.gender || 'Nil';
  var DOB = patientResponse.birthDate || 'Nil';
  var address = patientResponse.contact ? (patientResponse.contact[0].address ? JSON.stringify(patientResponse.contact[0].address, null, "\t") : 'Nil') : 'Nil';

  return (
    <>
      {!loading ?
        <div>
          <h1>Patient Demographics</h1>
          <div id="box">
            <table>
              <tbody>
                <tr>
                  <th className="title">First Name</th>
                  <th className="title">Last Name</th>
                  <th className="title">Mobile</th>
                </tr>
                <tr>
                  <td id="firstName">{firstName}</td>
                  <td id="lastName">{lastName}</td>
                  <td id="mobile">{mobile}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <th className="title">Language</th>
                  <th className="title">Gender</th>
                  <th className="title">DOB</th>
                </tr>
                <tr>
                  <td id="language">{language}</td>
                  <td id="gender">{gender}</td>
                  <td id="DOB">{DOB}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <th className="title">Address</th>
                </tr>
                <tr>
                  <td id="address">{address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        :
          <LoadingSpinner/>
      }
    </>

  )
}