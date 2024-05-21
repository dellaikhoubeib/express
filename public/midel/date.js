const date = (req,res,next)=>{
    let d = new date();
    let h = d.getHours()
    if (!(h>=9 && h<=10)){
        res.send('you are welcome')
    }

}
next()

module.exports = date