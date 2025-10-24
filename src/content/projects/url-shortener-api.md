---
title: "URL Shortener API"
slug: "url-shortener-api"
repo: "https://github.com/danielphilipjohnson/url-shortener-api"
site: "http://localhost:8080"
status: "wip"
stack: ["Rust", "Axum", "MongoDB", "Tokio", "Serde", "Docker"]
tags: ["api", "backend", "rust", "url-shortener"]
highlight: false
order: 12
cover: "/project/rust-default.jpg"
---

A high-performance, **Rust + Axum** URL shortener backed by **MongoDB**.  
Endpoints: `POST /api/shorturl` (create), `GET /api/shorturl/:id` (redirect), `GET /api/shorturls` (list).  
Run locally with Mongo in Docker or fully containerised via **docker-compose**. Includes structured errors, `cargo-watch`, `fmt`, and `clippy`.
