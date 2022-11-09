export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0
chmod +x ms-campus-kid-schedule/startup.sh
docker-compose up --build --force-recreate -V
