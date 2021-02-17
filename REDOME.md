# WordPress-Env-Docker

## docker initialize
```shell script
$ docker-compose up -d
```
### access
#### http://localhost:8000/wp-admin/
```shell script
$ docker exec -it wp1-wordpress /bin/bash
```
```shell script
$ chmod +x /tmp/wp-install.sh
```
```shell script
$ /tmp/wp-install.sh
```

#### docker start
```shell script
$ docker-compose up -d
```
#### docker end
```shell script
$ docker-compose down
```

#### docker end Pro
```shell script
$ docker-compose down --rmi all --volumes --remove-orphans
```