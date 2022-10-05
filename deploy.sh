export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0
GO111MODULE = off
docker-compose up --build --force-recreate
