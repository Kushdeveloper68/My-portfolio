const {IpL} = require("./Models.js");
const ipinfo = require('ipinfo');
async function ipGettingMiddleware(req, res , next) {
ipinfo((err, cLoc) => {
  if (err) {
    console.log("Error fetching IP info:", err);
    next();
  } else {
    // ip data saving 
    IpL.create({
      ip:cLoc.ip,
      location:cLoc.city + cLoc.region + cLoc.country,
      organization:cLoc.org,
      postalCode:cLoc.postal,
      timezone:cLoc.timezone
    });
    next();
  }
});
}
async function postMiddleware(req, res , next) {
  try {
   let { clientName ,phoneNumber, description} = await req.body;
   if(clientName === ''|| null || undefined || "") {
     res.send('enter your Name');
   } else if (description === ''|| null || undefined || "") {
     res.send('description is empty ');
   } else {
     next();
   }
  } catch (error) {console.log('Middleware post err', error)}
}
module.exports = {
  ipGettingMiddleware,
  postMiddleware
};