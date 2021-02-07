# :bookmark_tabs: Folio

[![Gitlab Pipeline Status](https://img.shields.io/gitlab/pipeline/daystram/folio/main)](https://gitlab.com/daystram/folio/-/pipelines)
[![Docker Pulls](https://img.shields.io/docker/pulls/daystram/folio)](https://hub.docker.com/r/daystram/folio)
[![MIT License](https://img.shields.io/github/license/daystram/folio)](https://github.com/daystram/folio/blob/master/LICENSE)

Danny August Ramaputra's personal website and portfolio.

## Services

The application comes in one part:

| Name      | Code Name  | Stack                                                                                                        |
| --------- | :--------: | ------------------------------------------------------------------------------------------------------------ |
| Front-end | `folio-fe` | [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [Next.js](https://nextjs.org/) |

## Develop

### folio-fe

To begin developing, simply enter the sub-directory and run the development server:

```shell
$ cd folio-fe
$ yarn
$ yarn dev
```

## Deploy

`folio-fe` is containerized and pushed to [Docker Hub](https://hub.docker.com/r/daystram/folio). They are tagged based on their application name and version, e.g. `daystram/folio:be` or `daystram/folio:fe-v2.0.1`.

To run `folio-fe`, run the following:

```console
$ docker run --name folio-fe -p 3000:3000 -d daystram/folio:fe
```

### Docker Compose

For ease of deployment, the following `docker-compose.yml` file can be used to orchestrate the stack deployment:

```yaml
version: "3"
services:
  folio-fe:
    image: daystram/folio:fe
    ports:
      - "3000:3000"
    restart: unless-stopped
```

## License

This project is licensed under the [MIT License](https://github.com/daystram/folio/blob/master/LICENSE).
