//id will be generated by mongo
db.userProfile.insert(
{
login: "SowHa",
password: "hashcode",
role:"Volunteer",
//field can be named personal or profile. But using profile as we have already used a profile model
Profile:{
    firstName: "Sowmya",
    LastName: "Hari",
    userName:"sowmyaHari",
    PhoneNumber : [{"Home":"+14256786766"}, {"Cell":'1234567888'}],
    Bio : "this is some bio which can be really large",
    email:"",
    weeklyComitted_hours:"20",
    professional_Links:[{"LinkedinProfile": " www.something.com"}],
    social_Links:[{"facebook":""}],
    otherLinks:[{gDoc:"googledocs.com"},{dropBox:""}],
    createdDate : new Date(),
    lastModifiedDate: new Date()
},
Badges:[{BadgeName:"2x",noOfTimesEarned:"2",lastUpdatedTime:""}]
}
)



