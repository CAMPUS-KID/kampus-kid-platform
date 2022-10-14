export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0
chmod +x ms-campus-kid-schedule/startup.sh
docker-compose -f docker-compose.auth-group.yml up --build --force-recreate -V