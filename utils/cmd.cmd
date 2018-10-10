cd D:\Hubert\Git\Perso\myLabo
start "MongoDB" "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"
start "myLaboServer" /D D:\Hubert\Git\Perso\myLaboServer node server.js
start "myLaboClient" /D D:\Hubert\Git\Perso\myLabo ng serve --locale=fr


npm install jsonwebtoken
npm install --save @angular/material @angular/cdk @angular/animations

ng generate component alert