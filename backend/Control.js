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
     let { name ,email, description, service} = await req.body;
     if (email == '' || null || undefined || "", name == '' || null || undefined || "", description == '' || null || undefined || "", service == '' || null || undefined || "") {
      let msg = "fill all the requirement inputs";
      return res.render('Main',{msg:msg});
     }
    await User.create({
     fullname:name,
     numberOrEmail:email,
     description,
     service
    });
  let msg = "your message has been sent";
  return res.render('Main',{msg:msg});
 } catch (e) {console.log('first  post route err' , e)}
}
module.exports = {
  handleMainPage,
  handleUserCreate
};