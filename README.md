# :bookmark_tabs: Folio

[![GitHub Actions Status](https://github.com/daystram/folio/actions/workflows/dev.yml/badge.svg)](https://github.com/daystram/folio/actions/workflows/dev.yml)
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

### Helm Chart

To deploy to a Kubernetes cluster, Helm charts could be used. Add the [repository](https://charts.daystram.com):

```shell
$ helm repo add daystram https://charts.daystram.com
$ helm repo update
```

And install `folio`:

```shell
$ helm install folio daystram/folio
```

You can override the chart values by providing a `values.yaml` file via the `--values` flag.

Pre-release and development charts are accessible using the `--devel` flag. To isntall the development chart, provide the `--set image.tag=dev` flag, as development images are deployed with the suffix `dev`.

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
