### Hej Caroline

Det här är mitt Github- test(Det är ju relativt omfattande) och jag har försökt att göra det så fort det gick. Det finns en kategori del men den är inte klar än. 

Testet är gjort med:
MongoDB, Express och NodeJs

Då jag egentligen inte vet mer om Comeon än det jag kan läsa på nätet, så vore det intressant att få göra ett förutsättningslöst studiebesök hos er.

Med vänlig hälsning

Mats Gröningsson 

### Setup
you need NodeJs and MongoDB installed

install node_modules
```
npm install
```
run the script
```
node app.js
```

### Login
login with three accounts:

```
username: rebecka
password: secret

username: eric
password: dad

username: stoffe
password: rock
```

### Installing MongoDB on Debian 9

```
sudo apt-get install curl
```
```
curl https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add -
```
```
sudo nano /etc/apt/sources.list.d/mongodb-org-4.0.list
deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main
```
```
sudo apt-get update
```
```
sudo apt-get install mongodb-org
```
```
sudo systemctl enable mongod
sudo systemctl start mongod
```

### Installing NodeJS on Debian 9/Ubuntu 18.04
```
sudo apt-get update
```
```
sudo apt-get install nodejs
```
```
nodejs -v
```