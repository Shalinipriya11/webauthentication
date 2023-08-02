
const passport = require('passport');
import { authenticate } from 'passport';
export default app =>{

app.get('/auth/google',authenticate('google',{
    scope:['profile','email']

}));
app.get(
'/auth/google/callback',
    authenticate('google'),
(req,res) => {
    res.redirect('/surveys');
}
);
app.get('/api/logout',(req,res)=>{
req.logout();
res.redirect('/');
});

app.get('/api/current_user',(req,res)=>{
res.send(req.user);
});
};
