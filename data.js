const fs = require('fs')
const y=require("readline-sync")
const axios = require('axios');
axios.get("https://api.merakilearn.org/courses")
.then(a =>{
    meraki_data=a.data
    File1=JSON.stringify(meraki_data,null,3)
    k=fs.writeFileSync("mynewfile.json",File1)
    serial_no=0
    for( i of meraki_data){
        console.log(serial_no+1,1["name"],i ["id"])
        serial_no++
    }

})

var Create=require('../model_node/model')
const meraki_data=require('./mynewfile.json');
const { create } = require('domain');
for(i of meraki_data){
    create('project2').insert({
    id:i .id,
    name:i.name,
    logo: i. logo,
    notes:i.notes,
    days_to_complete:i.days_to_complete,
    short_description:i.short_description,
    type:i.type,
    course_type:i.course_type,
    lang_available:i.lang_available

    })
    .then(()=>{
        console.log("insert")
    })
    .catch(()=>{
        console.log("not insert")
    })
}