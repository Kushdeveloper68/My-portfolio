
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
  postMiddleware
};