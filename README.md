## 本番環境
http://chat-space.ham357.com/

## アプリケーションの概要
- チャットアプリ

## アプリケーションの詳細一覧
- メッセージの投稿(Ajax)
- メッセージの編集(Ajax)
- メッセージの削除(Ajax)
- 画像投稿(carrierwave)
- メッセージ自動更新(Ajax)
- グループ作成
    - ユーザー検索(インクリメントサーチ)
- グループ編集
- ログイン画面(devise)
- テスト(RSpec,Capybara)
- デブロイ（AWS）
- デブロイ自動化(Capistrano)
- DB(MySQL)
- Webサーバー(nginx)
- アプリケーションサーバー（unicorn）

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index:true, null: false, unique:true|

### Association
- has_many :groups, through: :members
- has_many :members
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|string|null: false|
|image|string|null: false|
|user_id|references|null: false, foreign_key: true
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messages

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



