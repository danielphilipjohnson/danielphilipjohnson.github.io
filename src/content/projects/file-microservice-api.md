---
title: "File Microservice API"
slug: "file-microservice-api"
repo: "https://github.com/danielphilipjohnson/file-microservice"
site: "http://localhost:3000"
status: "wip"
stack: ["Rust", "Axum", "Tokio", "Tower", "Serde", "Tracing"]
tags: ["api", "backend", "rust", "file-upload", "microservice"]
highlight: false
order: 13
cover: "/project/rust-default.jpg"
---

A **secure, scalable file upload API** built with **Rust + Axum**.  
Supports **multipart uploads**, **rate limiting**, **CORS**, and **structured health checks** via `GET /health`.  
Implements **Tower-based middleware** for request tracing and rate limits, with async concurrency via **Tokio**.
