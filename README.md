This is a SMART on FHIR App built on ReactJS which launches from EHR , i.e. in EHR launch context.

This app is made after an initial development of the app using basic HTML , CSS and JS to understand the SMART on FHIR concepts.You can check the basic SMART app from the following link.The app works fine on both EHRs - Cerner and Epic
https://github.com/AbhishekSKini/SMART-on-FHIR.github.io 

Inorder to make the app run in EHR , you need to host the app . For that you can use any tools , or site . I used - https://replit.com/ to code and also to  deploy the site. Since this is an EHR launch context app , we need to deploy the app at the time of developemnt itself in order to see the changes we are doing parallely(replit is best for that purpose- replit will automatically deploy the app parallely , we can use replit the way we are using local IDEs itself but instead of hosting in localhost:xyz it will get deployed on its own respective url which can be accessed from  anywhere.).

Please go through the Cerner or Epic documentation to know how to register an app.
I tested the React based app in Cerner EHR only . Hopefully this will works fine in Epic or other EHRs also.