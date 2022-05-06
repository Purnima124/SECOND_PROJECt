// const req=require('express/lib/request')
// const res =require('express/lib/response')
// const {redirect,append,clearCookie}=require('express/lib/response')
const meraki_data=require('./mynewfile.json')
const knex=require('knex')
const fs=require("fs")

exports.get_data=(req,res)=>{
    res.send(meraki_data)
}

exports.postdata=(req,res)=>{
    const data={
        id:meraki_data.length+1,
        name:req.body.name,
        logo:req.body.log,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.body.type,
        course_type:req.body.course_type,
        lang_available:req.body.lang_available

    }
    knex('project2').insert(data).then(()=>{
        fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))
        res.send({message:"data post successfully"})
        console.log("Data inserted")
    }).catch((err)=>{
        console.log("Data dose not inserted")
    })
}


