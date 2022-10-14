import { parseJwt } from "../helper.js";
import LoadingSpinner from "../spinner.js"
import { useEffect, useState } from "react";

export default function Tokendisplay({ myAppSmart }) {
  console.log(myAppSmart)
  var decodedToken;
  var stringifyTokenResponse;
   var stringifyDecodedToken;


  const [refreshToken, setRefreshToken] = useState('');
  const [formattedDecodedTok, setFormattedDecodedTok] = useState('');
  const [tokenResponse, setTokenResponse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tokenHandler(myAppSmart)
    setTimeout(() => {
      setLoading(false);
    }, 2000)

  }, [])

  function tokenHandler(myAppSmart) {
    console.log(myAppSmart);
    decodedToken = parseJwt(myAppSmart.state.tokenResponse.id_token);
     stringifyDecodedToken = JSON.stringify(decodedToken ,null ,2);
    setFormattedDecodedTok(stringifyDecodedToken);
    stringifyTokenResponse = JSON.stringify(myAppSmart.state.tokenResponse, null, 2);
    setTokenResponse(stringifyTokenResponse);
    setRefreshToken(JSON.stringify(myAppSmart.state.tokenResponse.refresh_token));
    console.log(JSON.stringify(myAppSmart.state.tokenResponse.refresh_token))
  }

  return (
    <>
      {!loading ?
        <div>
          <h1>Token Display</h1>
          <div id="tokenarea">
            <div className="tokenareadiv">
              <h2>Access token Response</h2>
              <div id="tokenResponse" rows="30" cols="60"><pre>{tokenResponse}</pre></div>
            </div>

            <div className="tokenareadiv">
              <h2>Decoded id token</h2>
              <div id="decodedId" rows="30" cols="50"><pre>{formattedDecodedTok}</pre></div>
            </div>

            <div className="tokenareadiv">
              <h2>Refresh token</h2>
              <div id="refreshToken" rows="30" cols="50"><pre>{refreshToken}</pre></div>
            </div>
          </div>
        </div>
        :
       <LoadingSpinner/>
      }
    </>
  )
}