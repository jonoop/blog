---
slug: nginx-and-docker-and-pm2-multiple-domain-deploy
title: 简单配置nginx反向代理+docker+pm2 多域名部署
date: 2020-11-17
authors: Jon
tags: [nginx, docker, pm2, domain]
keywords: [develop, deploy]
---

<!-- truncate -->

在Docker容器化应用中，使用Nginx反向代理可以轻松地实现多个域名的部署。

## 配置 nginx反向代理

准备工作：安装好nginx以及创建好Docker容器（各个站点）

1.安装nginx
```
sudo apt update
sudo apt install nginx
```
2.配置nginx.conf
编辑配置文件
```
sudo vim /etc/nginx/nginx.conf
```
配置样例
```
server {
    listen 80; 监听80端口，服务器要开放80端口
    server_name jonoop.com; //这里改成你要绑定的域名

    location / {
        proxy_pass http://localhost:3000; //这里的localhost有些项目需要改成0.0.0.0,端口号就是你的docker容器映射的端口。
    }
}
```
```
server {
    listen 80; 监听80端口，服务器要开放80端口
    server_name yy.jonoop.com; //这里改成你要绑定的域名

    location / {
        proxy_pass http://localhost:3001; //端口转发，这里的localhost有些项目需要改成0.0.0.0,端口号就是你的docker容器映射的端口。
    }
}
```
3.重启nginx
```
service nginx restart
```
至此，解析过来的域名就会从监听的80端口，转发到相应的域名端口（docker容器里的站点）。

## 配置 域名解析
样例如下：
![image-domain_proxy](https://jonoop-1310659611.cos.ap-shanghai.myqcloud.com/domain_proxy.jpeg)

## docker里启动项目
推荐使用pm2运行项目
```
pm2 start yarn -- start --host 0.0.0.0 --port 3000 //注意空格，host可加可不加，看项目具体框架要求。
```

大功告成！！！