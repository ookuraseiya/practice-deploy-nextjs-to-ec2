# 🚀 Next.js × AWS デプロイ構成（EC2 + ALB + Route53）
## 📌 概要

過去に業務でAWSを使用していましたが、期間が空いてしまったため、
復習を目的として Next.jsアプリケーションの本番デプロイ構成を一から構築しました。

インフラ〜アプリケーション公開までを一貫して実装しています。（[デプロイ先リンク](https://practice-deploy-nextjs-to-ec2.com)

## 🏗️ 構成図
<img width="550" height="500" alt="AWS フロントエンド new drawio" src="https://github.com/user-attachments/assets/4635a93a-bf1c-459f-8b49-d6b63c743ac7" />



## 🧩 技術構成
- フロントエンド
  - Next.js
- インフラ
  - EC2（アプリケーションサーバ）
  - Nginx（リバースプロキシ）
  - ALB（Application Load Balancer）
  - Route53（DNS）
  - ACM（SSL証明書）
  - VPC / Subnet（Public構成）
  - IGW（Internet Gateway）

- ドメイン
  - お名前.com（ドメイン取得）
  - Route53へ委任
