export function parseJwt(token) {
  console.log("Hello from parseJWT");
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);

};

// Function to format JSON in html
// export function formatedJson(jsonValue, margin = 24) {
//   console.log("Hello from fromatedJSON");
//   var formattedJson = '';
//   Object.entries(jsonValue).forEach(([key, value]) => {
//     formattedJson += `<span style='margin-left:${margin}px;' class='json-key'>"${key}"</span><span class="syntax">:</span>`
//     if (typeof value == "object") {
//       formattedJson += `<span class='syntax'>{</span><br/>`
//       formattedJson += this.formatedJson(value, margin + 12)
//       formattedJson += `<br/><span style='margin-left:${margin}px;' class='syntax'>}</span>`
//     } else {
//       if (Object.keys(jsonValue).reverse()[0] !== key) formattedJson += `<span class='value'>"${value}"</span><span class="syntax">,</span><br/>`
//       else
//         formattedJson += `<span class='value'>"${value}"</span>`
//     }
//   })

//   return formattedJson;

// }
