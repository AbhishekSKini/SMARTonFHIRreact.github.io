import { useEffect, useState } from "react";
import { parseJwt } from "../helper.js";
import LoadingSpinner from "../spinner.js";

export default function Userdisplay({ myAppSmart }) {
  console.log("Props" + myAppSmart);
  const [loading, setLoading] = useState(true);
  var decodedToken;
  const [userResponse, setUserResponse] = useState({});
  useEffect(() => {
    decodedToken = parseJwt(myAppSmart.state.tokenResponse.id_token)
    userRequests(decodedToken.fhirUser, myAppSmart);
  }, [])

  async function userRequests(fhirUserUrl, myAppSmart) {
    await fetch(fhirUserUrl, {
      headers: {
        "Accept": "application/json+fhir",
        "Authorization": "Bearer " + myAppSmart.state.tokenResponse.access_token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUserResponse(data);
        setLoading(false);
      })
  }
  var firstName = userResponse.name ? (userResponse.name[0].given || 'Nil') : 'Nil';
  var lastName = userResponse.name ? (userResponse.name[0].family || 'Nil') : 'Nil';
  var id = userResponse.id;

  console.log(userResponse);

  return (

    <>
      {!loading ?
        <div>
          <h1>User Details</h1>
          <div id="box">
            <table>
              <tbody>
                <tr>
                  <th className="title">First Name</th>
                  <th className="title">Last Name</th>
                  <th className="title">id</th>
                </tr>
                <tr>
                  <td id="ufirstName">{firstName}</td>
                  <td id="ulastName">{lastName}</td>
                  <td id="uid">{id}</td>
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