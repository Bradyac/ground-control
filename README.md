# Ground Control
A simple single page application that tracks rocket launches/space articles from around the world using an external public API.

This web app makes use of Angular, TS/JS, HTML, CSS, MongoDB Atlas, Netlify (Hosting/Serverless Functions using Node/Express), Heroku (Hosting/Scheduler) and other npm packages (pagination, infinite-scroll, Mongoose, DotEnv, etc).

The code found in this repository is for the front-end Angular portion of the project as well as the serverless back-end portion using Netlify Functions.
At the moment there is another repository for the back-end data fetching portion of the web application. This is the code that fetches new data (launches/articles) from the external public API and stores it in the NoSQL (MongoDB Atlas) database to be used by the front-end.

# Ground Control Data Fetchers
This is the GitHub repo that currently holds the code that fetches (from the external APIs) and stores launches/articles a database for this web app to read from.

[Ground-Control-Data-Fetchers GitHub](https://github.com/Bradyac/ground-control-data-fetchers)
