# hepsiburada-case

Developed a search page for Hepsiburada.

# Getting Started

Fork/download/clone this Repo.

Requirements:

- Node v12 or higher (with npm) -> [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Yarn Package Manager -> Install yarn with npm: `npm install -g yarn`
- Docker v3.3.2 or higher (optional) -> [https://www.docker.com/get-started](https://www.docker.com/get-started)

  There are two different ways to run the application:
  <br/>
  <br/>

## With React Scripts

Install the required dependencies:

```
yarn install
```

To run the application in dev mode on port [http://localhost:3000](http://localhost:3000):

```
yarn start
```

To run the application with the production build on port [http://localhost:8081](http://localhost:8081):

```
yarn build  # producing a production build
yarn run server  # running the server
```

### With Docker

Build the docker image with the following code:

```
./docker-build.sh  # for mac users
./docker-build.bat  # for windows users
```

To run the application on port [http://localhost:8081](http://localhost:8081):

```
docker-compose up -d --build
```

To stop the application:

```
docker-compose stop
```

## Building the Project

To create an optimized production build:

```
npm run build
```

or

```
yarn build
```
