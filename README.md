# Hestia - User Management Service

## Introduction 
### Purpose:
This service will handle all user preferences such as Settings and Filter Preferences.
It will interact with the User Database and retrieve information associated with it. 

## Technologies:
This service will use the NestJS framework for this server-side application.
Code will be in TypeScript. 
The Package Manager will be npm. 

## Installation
Please make sure you have Node installed.
Check by running the following command(s)
```
$ node -v
v20.18.0
```
To install NestJS, run these command(s)
```
$ npm i -g @nestjs/cli
```

## Development

### Installing Service
Run the following command to install the dependencies on each project
```
npm install
```

### Running Service
```
npm run start
```
And based on how we configured this service, it will run in 
http://localhost:3000/

To watch for changes in your files, you can run the following command to start the application:
```
npm run start:dev
```
This command will watch your files, automatically recompiling and reloading the server.

To ensure maximum stability and extensibility, we use the base eslint and prettier cli packages. This setup allows neat IDE integration with official extensions by design.

For headless environments where an IDE is not relevant (Continuous Integration, Git hooks, etc.) a Nest project comes with ready-to-use npm scripts.

```
# Lint and autofix with eslint
$ npm run lint

# Format with prettier
$ npm run format
```
### Testing Service
To Unit-Test the service please run

```
npm run test
```
