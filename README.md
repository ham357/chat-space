## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||
|mail|string|index:true, null: false, unique:true|

### Association
- has_many :members
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|string|null: false|
|user_id|integer|null: false, foreign_key: true

### Association
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- has_many :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



