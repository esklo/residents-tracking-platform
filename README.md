## Entrypoint of the residents-tracking-platform system
### A web application for automated collection, monitoring and analysis of complaints from residents of the district

## Setup
`cp .env.example .env`

## Build
`docker compose build`

## Run
`docker compose up -d`

### Structure
```
.
├── .github/ –> CI/CD configuration
├── docker/postgres/ -> pgsql extensions 
├── e2e/ –> End-To-End tests (cypress)
├── .env.example
├── .env.test
├── .gitignore
├── docker-compose.yml
└── README.md
```

### Architecture
![architecture](./assets/c4.png)

### CI/CD pipeline
![ci/cd pipeline](./assets/cicd.png)

### Screenshots
#### internal application
![requests table](./assets/screenshot_1.png)
![map](./assets/screenshot_2.png)
![map analytics](./assets/screenshot_3.png)
#### public application
![public webapp](./assets/screenshot_4.png)