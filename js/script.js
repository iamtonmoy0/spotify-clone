
let songIndex=0;
let audioElement= new Audio('../music/Apocalypse - Cigarettes After Sex(MP3_160K).mp3')
let masterPlay=document.getElementById('masterPlay')
let progressBat= document.getElementById('progressBar')
// songs
let songs=[
	{songName:"Apocalypse",filePath:"../music/Apocalypse - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/Apocalypse - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"Each Time You Fall In Love",filePath:"../music/Each Time You Fall In Love - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/Each Time You Fall In Love - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"Flash",filePath:"../music/Flash - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/Flash - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"John Wayne",filePath:"../music/John Wayne - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/John Wayne - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"K",filePath:"../music/K. - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/K. - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"Opera House",filePath:"../music/Opera House - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/Opera House - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"Sunsetz",filePath:"../music/Sunsetz - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/Sunsetz - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"Sweet",filePath:"../music/Sweet - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/Sweet - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"Truly",filePath:"../music/Truly - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/Truly - Cigarettes After Sex(MP3_160K).mp3"},
	{songName:"Young",filePath:"../music/Young _ Dumb - Cigarettes After Sex(MP3_160K).mp3" ,coverPath:"../music/Young _ Dumb - Cigarettes After Sex(MP3_160K).mp3"},

]