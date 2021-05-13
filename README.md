# hepsiburada-case

Developed a search page for Hepsiburada.

## Getting Started

Fork/download/clone this Repo.

There are two different ways to run the application:

### With React Scripts

Install the required dependencies:

```
yarn install
```

Run the application with the following code:

```
npm start
```

or

```
yarn start
```

### With Docker

Build the docker image with the following code:

```
./docker-build.sh # for mac users
./docker-build.bat # for windows users
```

To run the application on port [http://localhost:4000](http://localhost:4000):

```
docker-compose up -d --build
```

To stop the application:

```
docker-compose stop
```
