import React, { useEffect, useState } from "react";
import FHIR from "fhirclient";
import './redirect.css'
import Patientdisplay from "./sub_components/patientdisplay";
import Userdisplay from "./sub_components/userdisplay";
import Tokendisplay from "./sub_components/tokendisplay";


export default function Redirect() {
  const [loading, setLoading] = useState(true);
  let [myApp, setMyApp] = useState({});
  var decodedToken;
  useEffect(() => {
    smartAppReady();
  }, [])

  var smartAppReady = () => {
    FHIR.oauth2.ready()
      .then(function(client) {
        setMyApp(client)
        console.log(myApp)
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false)

        }, 2000)
      })
      .catch(() => {
        console.log("Error")
      })
  }





  return (
    <>
      {!loading ?
        <div>
          <Patientdisplay myAppSmart={myApp} />
          <Userdisplay myAppSmart={myApp} />
          <Tokendisplay myAppSmart={myApp} />
        </div>
        : <div>Loading......</div>
      }
    </>
  );
}