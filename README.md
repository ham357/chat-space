## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index:true, unique:true|
|mail|string|index:true, null: false, unique:true|

### Association
- has_many :groups, through: :members
- has_many :members
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|string|null: false|
|user_id|integer|null: false, foreign_key: true

### Association
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :members
- has_many :members
- accepts_nested_attributes_for :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



