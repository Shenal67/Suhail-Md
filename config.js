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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_19_03_30_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUJmdld6T1VpMXVub0lUcVV6d25Kc2kyQmF0ZzVSQm9NYWN5czh3RFkzVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIko2YU13b2d2dmJSYld0T1VLN2xMWFk3dGUzOCtHNjFQdWxxbTlUOEVQaXc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0NQcDk5OG5waTZ0akdBc0hGZlFNWm5jcVN2aHZ6RmQwelBuYjUrdjZrbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlVvcXFhWG51c2RaQ0V1aWhLazVJMGFJc1BrVjhhc2thU2hiQmhBNTdDWGc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUZET0w0YWlWZDNrcGRodldYaVVTRTNWdHVQQnZrZkpZT2NDczVLNFFHRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIiswL0xtL3Z2bUtDRm9PUkpMamVhb29KQ0MzcFNocWdMWHNGMmJ5MkFUaEU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJlRnpXeElUcDZsQUQvR1piTkUzb3dKNkYvWWFNcTMzK0FLdHV5eXNYZzEwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieXlZK3k4aDhyUGJGMmpnbDZhRG40MHBYdkl6MnV1dGs1dnBEWTJFNkFXMD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPZ0dTd0UyaWROMVVPN21mQzNicWN2VlFiSkNWRGhVdGREMEhmcGdkcU5xZXdUZUlGVVZwZjBuT1FkWnRXc2twVERWUEEwM01OcyswUlp4ODNBeFhqdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTg2LFwiYWR2U2VjcmV0S2V5XCI6XCJrTlhib016VFpSOUxhMWhnY1F4UnJ3cXV2RWJGL3JqeXhFVW03ejlmUjJRPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3NTAyNzM3MDVAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiM0U0MDA5MERBNUZFNzM1MUMxQjREM0JENDIzQ0Y3ODhcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTc4MzE0OH0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDc1MDI3MzcwNUBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIxNUNFNjIyRkM4RTdENjQzNzMzQ0I5NTYyNUNFNjI1OFwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExNzgzMTQ5fSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjk0NzUwMjczNzA1QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjhFNjdEQUQyMTYyMjg0QjdGNkNDOUNFQ0FDQ0E1RDE4XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE3ODMxNTN9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3NTAyNzM3MDVAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNDcwRDBDQTFCOUU5MzNBQjhDREJGODM2ODdBM0UyRjhcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTc4MzE1M31dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIkhLcnFOcmREVHgtSktZWF8xaUJDMndcIixcInBob25lSWRcIjpcImUwZWYxZjQyLTgwNmMtNGMzNS05NzAxLWFiYWUyNGY2N2EwYVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVTdjTXpwZmcvZFlMdUJsTGgzK3VGM05sK2VrPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm5GV2lTaW9icUt0V3pPWTVqcHdZaDYvNlFhYz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJKU0dHVFFCTFwiLFwibWVcIjp7XCJpZFwiOlwiOTQ3NTAyNzM3MDU6MThAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjA0MjMwMzc1ODI5NjgzOjE4QGxpZFwiLFwibmFtZVwiOlwi8J+kq1wifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDT0d6OHYwQkVPZjVuckFHR0FNPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiYW5BbWxpdnZJaUUyVFN3ZFFsYXYvSlp1ankybFdmUGJsNXh4WnExaGpIYz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkJnU0tiK25mdGlmamxqeDFlOGE0K0dPZlZGaWtQdUtxd0FFOVJZUHpNZVFPdzZNNGR0ZnZuQUVYakg2NEF2QnBGOGxmeTBPaU5sQWxodHR5bkVvWkN3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiLzZYWUlUWTdma3NWek1FME5sNnpFRXc2UUJDVi9TaTlKc2tZNTk0VWtmNWJ2a0VLcUNZNUQwa3ZVWlJ5cTlVcmZGSDdWcW81ZS9DYVZuaUZsb2RlaHc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjk0NzUwMjczNzA1OjE4QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQldwd0pwWXI3eUloTmswc0hVSldyL3lXYm84dHBWbnoyNWVjY1dhdFlZeDNcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExNzgzMTQ2LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQU5INlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5INi5qc29uIjogIntcImtleURhdGFcIjpcIjlBYWxNRzNiU3F2dmFVMW9iQmQ0Q1ZJWGpUUmRnTXZkZndOaFdidzVkOW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTMyNDUzODU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE3Nzk0MTA4OTNcIn0iCn0=YWdlVGltZXN0YW1wXCI6MTcxMTcxMjk1Nn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDc1MDI3MzcwNUBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI3Q0YxQkM5MDVDNUEyODdDNkQzMkQzNUQwRDVGQkM0RlwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExNzEyOTU2fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwic3F2T0tkaVFSd2UwVUdkS0d3czJyUVwiLFwicGhvbmVJZFwiOlwiOGE5Yjg4MmMtZTgwOS00MDQyLWE2ODEtMTU0YzRkYWIzYTc2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJMjNhUDM5NHRpMzFFZUxDd05XdHRoRndjS2M9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibWJWcXRmd0FtUG1JclA5NDNmT1lEK3Nhbk9VPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlo0OFI2WURBXCIsXCJtZVwiOntcImlkXCI6XCI5NDc1MDI3MzcwNTo2QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjIwNDIzMDM3NTgyOTY4Mzo2QGxpZFwiLFwibmFtZVwiOlwiQ3J5cHRvX1JJVlwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTmJJdXRFRUVMTFZtckFHR0FRPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwidDhza0Z5OXg1M0NBc3pkNU1VM2V0eWc0VXRlbWlQNEFXS0crM3Vwb2tTbz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkpTcmJTWUQxU3pNSGw2bkE4ODhreTE0bFlUalJ5OHhCUFJVSkhOUmFDdk1Fd2hscDdFODJtdlJvaHMzaEsrZVNmMHZERFNGeXFWSjlIK0pnaWtQQURnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiWlU1OFFSL2ZWM0dpclRGclhRV3BObU4reEc2SmxCREhwUFZxT2llMXltcmRoQktDcndPcXo3TkN5VWQ4TitxUXRkeGp1bG5nUWlVSDdkYnQyemoxQnc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjk0NzUwMjczNzA1OjZAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCYmZMSkJjdmNlZHdnTE0zZVRGTjNyY29PRkxYcG9qK0FGaWh2dDdxYUpFcVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTE3MTI5NDksXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBUFBYXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFBYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiODI2R05CTXBhZjNDSFgwZXBwRHRjTGwvaDFxZ3hQUk5sTitMZGFadlZQcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ0NTcwNzEwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


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
