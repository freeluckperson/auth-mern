> HTTP REQUEST MODEL USERS

 - POST to http://localhost:3000/api/register
  {
  "email":"1@1.com",
  "userName":"test1",
  "password":"test1"
  }

 - POST to http://localhost:3000/api/login
  {
  "email":"1@1.com",
  "password":"test1"
  }

  - POST to http://localhost:3000/api/logout

/////////////////////////////////////////////////////////////////

> HTTP REQUEST MODEL TASK

- GET to http://localhost:3000/api/tasks
- GET to http://localhost:3000/api/tasks?taskId=id
- POST to http://localhost:3000/api/tasks
  {
  "title": "task 1",
  "description": "task 1 description",
  "completed":true
  }

- PUT to http://localhost:3000/api/tasks
  {
  "title": "task 1",
  "description": "task 1 description",
  "completed":true
  }

- DELETE to http://localhost:3000/api/tasks/ID
