const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_49_03_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUNFUU13czhRMUo3UW80UUdTcitnMzZuRjhWRDdKK3lLeTd2NG5pTkJYMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkpSU0VHVSsyQ01GOHZ1bU1yNXVkS0ltNVRadkpPNjlSMko5eGFHVVdVMkE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0Q2dS9WS0liQnFoTzZJcnpDbm1SMHMySFkzV3daZU8vRHJhbkRRNjlVdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInpJS09XUFdtNDFDZW54cktOV3N3T2VuMnlGOHVTaFFNZmR2UkY4UEdSeTA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU1BhVEw5czJkQnhQd3JkUlpGM0JuL0x3cjVuaHdnTy95N245RHBPWEtuRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIndmNlhLaW1wUTJIU2tiM2ZrS3o4ZmlkZ0pnaXlGdkJqcldkL2M4THFYaVE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDTEtBR0xNQTkzS2NoS1AzeEJNcDljL0ltM1pIK0pkMDVIL0UrRWlSSzI0PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMGJjRmVDNURvQkZxQTZqTFRiZWVyL1N3dWZOZnJLVkJMVW8ybHBPWitFUT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI5cW9GRklkSmpKcVdGTVhMUmY5NWdSc0l3Y0hndSttanU3b3dxVUYyY0x6K2d0MFg3VUhNelZRWHN5V2V4cy9CL2hZR1kwQXlHem9obk1HUS9LTlJEZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTAsXCJhZHZTZWNyZXRLZXlcIjpcInA2V0phUy9yOVRGb2xlMEduVXlQakgzdmtLYVRjYmhUelFIUlllbURzRXM9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDc1MDI3MzcwNUBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI2MzA5OEY1NzZGNkU1NzA4MEYxQTJDNTJBNjkwQjAzRVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExNzEyOTUyfSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjk0NzUwMjczNzA1QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjBDNzIzNEFDMTdEOUMyNUNDOTlCNzZCMUIyQ0QwRTU4XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE3MTI5NTJ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3NTAyNzM3MDVAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQTc1QjM2NjA2MEYwMzk2OUY4QTY3OTAyOTlCMTM0RDdcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTcxMjk1Nn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDc1MDI3MzcwNUBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI3Q0YxQkM5MDVDNUEyODdDNkQzMkQzNUQwRDVGQkM0RlwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExNzEyOTU2fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwic3F2T0tkaVFSd2UwVUdkS0d3czJyUVwiLFwicGhvbmVJZFwiOlwiOGE5Yjg4MmMtZTgwOS00MDQyLWE2ODEtMTU0YzRkYWIzYTc2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJMjNhUDM5NHRpMzFFZUxDd05XdHRoRndjS2M9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibWJWcXRmd0FtUG1JclA5NDNmT1lEK3Nhbk9VPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlo0OFI2WURBXCIsXCJtZVwiOntcImlkXCI6XCI5NDc1MDI3MzcwNTo2QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjIwNDIzMDM3NTgyOTY4Mzo2QGxpZFwiLFwibmFtZVwiOlwiQ3J5cHRvX1JJVlwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTmJJdXRFRUVMTFZtckFHR0FRPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwidDhza0Z5OXg1M0NBc3pkNU1VM2V0eWc0VXRlbWlQNEFXS0crM3Vwb2tTbz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkpTcmJTWUQxU3pNSGw2bkE4ODhreTE0bFlUalJ5OHhCUFJVSkhOUmFDdk1Fd2hscDdFODJtdlJvaHMzaEsrZVNmMHZERFNGeXFWSjlIK0pnaWtQQURnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiWlU1OFFSL2ZWM0dpclRGclhRV3BObU4reEc2SmxCREhwUFZxT2llMXltcmRoQktDcndPcXo3TkN5VWQ4TitxUXRkeGp1bG5nUWlVSDdkYnQyemoxQnc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjk0NzUwMjczNzA1OjZAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCYmZMSkJjdmNlZHdnTE0zZVRGTjNyY29PRkxYcG9qK0FGaWh2dDdxYUpFcVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTE3MTI5NDksXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBUFBYXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFBYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiODI2R05CTXBhZjNDSFgwZXBwRHRjTGwvaDFxZ3hQUk5sTitMZGFadlZQcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ0NTcwNzEwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
