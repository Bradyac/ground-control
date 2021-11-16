# GroundControl
A simple single page application that tracks rocket launches/space articles from around the world using an external public API.

This web app makes use of Angular, TS/JS, HTML, CSS, MongoDB Atlas, Netlify (Hosting/Serverless Functions using Node/Express), Heroku (Hosting/Scheduler) and other npm packages (pagination, infinite-scroll, Mongoose, DotEnv, etc).

The code found in this repository is for the front-end Angular portion of the project as well as the serverless back-end portion using Netlify Functions.
At the moment there is another repository for the back-end data fetching portion of the web application. This is the code that fetches new data (launches/articles) from the external public API and stores it in the NoSQL (MongoDB Atlas) database to be used by the front-end.

## Angular Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Tests

Note that this application currently does not have any unit/end-to-end tests implemented but the project is set up with testing frameworks for future additions.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
