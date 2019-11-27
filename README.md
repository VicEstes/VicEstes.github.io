# Dungeon and dragons sheet

##### Character Sheet
* Character name
* Player name
* Class and Level
* Race
* Age
* Gender

##### Schema
CREATE TABLE dndSheet (
id INTEGER PRIMARY KEY, 
name VARCHAR(255), 
player VARCHAR(255), 
classs VARCHAR(255), 
lvl INTEGER, 
race VARCHAR(255), 
age INTEGER, 
gender VARCHAR(255), 
strength INTEGER, 
dexterity INTEGER, 
constitution INTEGER, 
intellect INTEGER, 
wisdom INTEGER, 
charisma INTEGER);

##### REST
Name | Method | Path
------------ | ------------- | ------------ |
Retrieve character collection | GET | /Characters |
Retrieve character member | GET | /Characters/id |
Create character member | POST | /Characters |
Update character member | PUT | /Characters/id |
Delete character member | DELETE | /Characters/id |

##### Login infomation
* Frist Name
* Last Name
* Email
* Password

CREATE TABLE users(
id INTEGER PRIMARY KEY,
fname TEXT,
lname TEXT,
email TEXT,
password TEXT);

##### REST
Name | Method | Path
------------ | ------------- | ------------ |
Create user member | POST | /Users/id |
Create session collection | POST | /Sessions/ |
