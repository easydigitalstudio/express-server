# Easy Digital Studio - Express Server
## install
```
npm i @easydigitalstudio/express-server
```
## Server
### getConfig
Function used to validate the env variable format (upper case)
#### usage
```javascript
export default {
 port: getConfig('PORT')
}
```
### mustProvide
Function used to throw an error if the specified field is not provided
#### usage
```javascript
function myFunction(param = mustProvide('param')) {
  // Param provided
}
```
### logger
Function used to log info or errors
#### usage
```javascript
const message = 'Hi boy!';
logger.info(message);
```
```javascript
const error = new Error();
error.message = 'You failed';
error.status = 500;
logger.error(error);
```
### mongoCollection
Function to return a mongo collection
#### usage
```javascript
const userCollection = mongoCollection('user');
userCollection.insertOne({
  name: 'toto',
  age: 29
});
```