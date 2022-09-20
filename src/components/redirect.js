import React from "react";
import './redirect.css'

export default function Redirect() {
  console.log("HI");
  return (
    <>
      <h1>Patient Demographics</h1>
      <div id="box">
        <table>
          <tr>
            <th className="title">First Name</th>
            <th className="title">Last Name</th>
            <th className="title">Mobile</th>
          </tr>
          <tr>
            <td id="firstName"></td>
            <td id="lastName"></td>
            <td id="mobile"></td>
          </tr>
        </table>
        <table>
          <tr>
            <th className="title">Language</th>
            <th className="title">Gender</th>
            <th className="title">DOB</th>
          </tr>
          <tr>
            <td id="language"></td>
            <td id="gender"></td>
            <td id="DOB"></td>
          </tr>
        </table>
        <table>
          <tr>
            <th className="title">Address</th>
          </tr>
          <tr>
            <td id="address"></td>
          </tr>
        </table>
      </div>
      <h1>User Details</h1>
      <div id="box">
        <table>
          <tr>
            <th className="title">First Name</th>
            <th className="title">Last Name</th>
            <th className="title">id</th>
          </tr>
          <tr>
            <td id="ufirstName"></td>
            <td id="ulastName"></td>
            <td id="uid"></td>
          </tr>
        </table>
      </div>
      <h1>Token Display</h1>
      <div id="tokenarea">
        <div className="tokenareadiv">
          <h2>Access token Response</h2>
          <div id="tokenResponse" rows="30" cols="60"></div>
        </div>

        <div className="tokenareadiv">
          <h2>Decoded id token</h2>
          <div id="decodedId" rows="30" cols="50"></div>
        </div>

        <div className="tokenareadiv">
          <h2>Refresh token</h2>
          <div id="refreshToken" rows="30" cols="50"></div>
        </div>
      </div>
      <h1>Resources JSON Display</h1>
      <div className="resourceDisplay">
        <div>
          <h2>Patient</h2>
          <div id="patientJson"></div>
        </div>
        <div>
          <h2>User</h2>
          <div id="userJson"></div>
        </div>
      </div>
    </>
  )
}