<div align="center">
  <p>
    <img src="https://user-images.githubusercontent.com/11808903/73601813-5dbffd00-4568-11ea-9377-ec8f554417fb.png" width="100"/>
  </p>

  <h1>Group Communication Survey API</h1>
</div>

## Production

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- `.env`
  - `NODE_ENV`
  - `MONGODB_USERNAME`
  - `MONGODB_PASSWORD`

### Running

- `❯ docker-compose --file docker-compose.prod.yml up -d --build`

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en) `v10.15.3`
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- `.env`
  - `NODE_ENV`
  - `MONGODB_USERNAME`
  - `MONGODB_PASSWORD`

### Running

- `❯ yarn`
- `❯ docker-compose --file docker-compose.dev.yml up -d`
- `❯ yarn start`
