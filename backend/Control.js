const { IpL, User} = require('./Models.js');
const ipinfo = require('ipinfo');
//get controler
async function handleMainPage(req , res ) {
  try {
    let msg = "Welcome on my portfolio page 📃."
    res.render('Main', {msg:msg});
  }catch (e) {console.log(' get route rendering err' , e)} 
}
async function handleUserCreate(req, res) {
 try {
     let { name ,email, description} = await req.body;
 if( email !== '' || null || undefined || "") {
    await User.create({
     fullname:name,
     numberOrEmail:email,
     description
    });
 } 
  if (email === '' || null || undefined || "") {
     await   User.create({
     fullname:name,
     description
    }); 
  }
  let msg = "your message has been sent";
  res.render('Main',{msg:msg});
 } catch (e) {console.log('first  post route err' , e)}
}
module.exports = {
  handleMainPage,
  handleUserCreate
};