# 🚀 Next.js × AWS デプロイ構成（EC2 + ALB + Route53）
## 📌 概要

過去に業務でAWSを使用していましたが、期間が空いてしまったため、
復習を目的として Next.jsアプリケーションの本番デプロイ構成を一から構築しました。

インフラ〜アプリケーション公開までを一貫して実装しています。

## 🏗️ 構成図
<img width="550" height="500" alt="AWS 構成図 drawio" src="https://github.com/user-attachments/assets/9cbe22da-231b-491e-9175-85fc7de99248" />



## 🧩 技術構成
- フロントエンド
  - Next.js
  - TypeScript
- インフラ
  - EC2（アプリケーションサーバ）
  - Nginx（リバースプロキシ）
  - ALB（Application Load Balancer）
  - Route53（DNS）
  - ACM（SSL証明書）
  - VPC / Subnet（Public構成）
- ドメイン
  - お名前.com（ドメイン取得）
  - Route53へ委任
