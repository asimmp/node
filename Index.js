
const path= require ('path');
//connect viewengine
app.set('views', path.join( dirname));
app.set('view engine','hbs')
app.get('/',(req,res)=>{
res.render('views/firstpage')
app.listen(8080)
