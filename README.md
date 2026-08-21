# MUSASHI resort 公式サイト

公開中: https://634resort.com/

見た目はそのまま、置き場所を GitHub と Cloudflare に移したコピーです。会社メール（Microsoft 365）の設定は触っていません。

## 公開の分かれ方

- 確認用（staging）: `634resort-web-staging`
- 本番: `634resort-web`（634resort.com）

## やってはいけないこと

- Cloudflare の Email Routing をオンにする（会社メールが止まります）
- メール用 DNS（MX / SPF / autodiscover）を Proxied にする
