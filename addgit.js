app=require('express')();
app.get('/',function(req,res){
  let p1=req.query.p1*1;
  let p2=req.query.p2*1;
  let add=0;
  add=p1+p2;
  res.json({
    "result":add
  });
});
app.listen(3000);
