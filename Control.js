const { IpL, User} = require('./Models.js');
const ipinfo = require('ipinfo');
//get controler
async function handleMainPage(req , res ) {
  try {
    const ip = await req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    ipinfo(ip, async (err, cLoc) => {
      if (err) {
        console.log('ip errrrr ', err );
       return;
      }
     if(ip === null || undefined || '' || "") {
       console.log('ip err' , err);
       res.render('Main');
      } else {
       await IpL.create({
         ip,
         location:JSON.stringify(cLoc) 
        });
        res.render('Main');
      }
    });
  }catch (e) {console.log(' get route rendering err' , e)} 
}
async function handleUserCreate(req, res) {
 try {
   console.log(req.body);
     let { clientName ,numberOrEmail, description} = await req.body;
 if( numberOrEmail !== '' || null || undefined || "") {
    await User.create({
     fullname:clientName,
     numberOrEmail,
     description
    });
   
 } 
  if (numberOrEmail === '' || null || undefined || "") {
     await   User.create({
     fullname:clientName,
     description
    }); 
  }
  res.send('user created');
 } catch (e) {console.log('first  post route err' , e)}
}
module.exports = {
  handleMainPage,
  handleUserCreate
};