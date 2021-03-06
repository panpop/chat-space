# Database design

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages

## groups table

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- has_many :members
- has_many :users, through: :members
- has_many :messages

### messages table

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true, add_index|
|group_id|integer|null: false, foreing_key: true, add_index|

### Association
- belong_to :user
- belong_to :group

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, add_index|
|group_id|integer|null: false, foreign_key: true, add_index|

### Association
- belongs_to :group
- belongs_to :user
