### 도커 빌드

`docker build -t blanq-docker -f ./Docker/Dockerfile .`

### 도커 실행

`docker run -p 80:80 blanq-docker`

### 도커 컴포즈 백그라운드 실행

`docker-compose -f ./Docker/docker-compose.yml up -d`
