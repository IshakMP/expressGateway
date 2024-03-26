
rem Set the folder path
set "myPath=%~dp0Config"

docker pull express-gateway
docker run -d --name express-gateway -v %myPath%:/var/lib/eg -p 8080:8080 -p 9876:9876 express-gateway

