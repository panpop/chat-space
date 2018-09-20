# Database design

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index|
|email|string|null:false|

### Association
- has_many :groups, through: :members
- has_many :messages

## groups table

|Column|Type|Options|
|------|----|-------|
|group|string|null: false|
|user_id|integer|null: false, foreing_key: true|

### Association
- has_many :users, throung: :members

### messages table

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreing_key: true|

### Association
- belong_to :user
- belong_to :group

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
