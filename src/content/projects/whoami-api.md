---
title: "Request Header Inspector (WhoAmI API)"
slug: "whoami-api"
repo: "https://github.com/danielphilipjohnson/whoami-api"
site: "http://localhost:3000"
status: "wip"
stack: ["Rust", "Axum", "Hyper", "Serde"]
tags: ["api", "backend", "observability", "headers", "rust"]
highlight: false
order: 14
cover: "/project/rust-default.jpg"
---

A **high-performance WhoAmI endpoint** that inspects request headers and returns **IP** (incl. `x-forwarded-for`), **browser/OS** (parsed from User-Agent), **Accept-Language**, and a **total request counter**.  
Primary route: `GET /api/whoami` → JSON with `ipaddress`, `browser_name`, `browser_version`, `os`, `language`, `parsed_language`, and `total_requests`.
