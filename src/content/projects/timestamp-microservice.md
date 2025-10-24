---
title: "Timestamp Microservice"
slug: "timestamp-microservice"
repo: "https://github.com/danielphilipjohnson/timestamp-microservice" # update if different
site: "http://localhost:8080" # update when deployed
status: "wip"
stack: ["Rust", "Actix-web", "Chrono", "Serde"]
tags: ["api", "backend", "time", "timezone", "rust"]
highlight: false
order: 15
cover: "/project/rust-default.jpg"
---

A **date–time REST API** in **Rust + Actix-web** with **Chrono** for parsing and timezone conversions.  
Endpoints:  
- `GET /api` → current time (UTC, Unix, local)  
- `GET /api/:date` → parsed date (optional `?timezone=`)  
- `GET /api/timezones` → supported TZ list  
- `GET /api/weekday/:date` → weekday name  
Includes structured errors and test suite.
