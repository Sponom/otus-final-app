 # URL Shortener App 
  
## Description

URL shortener refers to a tool that can take a link that is too long and convert it into a more compact version

This application is developed with **NestJS** framework and deployed with **Heroku CLI**

To see the application on production you can go to [https://otus-shorten-url.herokuapp.com/](https://otus-shorten-url.herokuapp.com/)

## What was used:

* **Mongo DB** as a database with **MongooseModule**
* **Nest custom filter** for catching **NotFoundException**
* **Nest global pipes** with **class-validator**  and **class-sanitizer** for validate and sanitize URLs from user
* **Handlebars** template engine for rendering application client pages



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


