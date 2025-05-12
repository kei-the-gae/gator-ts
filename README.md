# Gator

This is a [guided project](https://www.boot.dev/courses/build-blog-aggregator-typescript) I completed as a part of the Boot.dev back-end developer curriculum. This is an RSS feed aggregator that allows users to subscribe to various RSS feeds, view the latest articles from those feeds, and manage their subscriptions. The project focuses on practicing SQL queries and database design.

[![typescript](https://badgen.net/badge/TypeScript/5.8.3/blue?icon=https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)](https://www.typescriptlang.org/)
[![node.js](https://badgen.net/badge/Node.js/21.2.0/green?icon=https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg)](https://nodejs.org/en)

## Features

- Follow and unfollow RSS feeds
- Fetch and parse RSS posts
- View the latest articles from followed feeds
- Store user subscriptions
- Multi-user support

## Usage

Node version 21.2.0 and PostgreSQL 17 is required to run this project and must be installed beforehand.

To install the application, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/kei-the-gae/gator-ts.git gator
cd gator
```

Then run the following command to install the dependencies:

```

```

```bash
npm install
```

Run the following command to create the config file:

```bash
cat > ~/.gatorconfig.json << EOF
{"db_url":"postgres://$(whoami):@localhost:5432/gator?sslmode=disable"}
EOF
```

Run the following command to create the PostgreSQL database:

```bash
createdb gator
```

Now you can run the application from the command line. Each command can be run by prefixing commands with `npm start <command>`

`register <name>` registers a new user

`login <name>` logs in an existing user

`feeds` lists all the RSS feeds available in the database

`addfeed <name> <feed_url>` adds a new feed to the database and allows the logged-in user to follow it

`follow <feed_url>` allows the logged-in user to follow an RSS feed

`unfollow <feed_url>` allows the logged-in user to unfollow an RSS feed

`following` lists all the RSS feeds that the logged-in user is currently following

`browse <limit>` lists the latest articles from all the RSS feeds that the logged-in user is following. You can specify an optional limit to the number of articles to display (default is 2).

`agg <time_between_reqs>` fetches the latest articles from all the RSS feeds in the database and aggregates them into a single list. This command will parse the feeds and store the latest articles in the database. The argument is a time duration string that specifies the time to wait between requests to fetch the feeds. This is to avoid overwhelming the RSS feed servers. For example, `agg 5s` will wait 5 seconds between each request to fetch the feeds.
