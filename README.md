# README

## users table

|Column|Type|Options|
|name|string|null: false, add_index|
|email|string|null:false|

### Association
- has_many :groups
- has_many :members
- has_many :messages

## groups table

|Column|Type|Options|
|group|string|null: false|

### Associaton
- has_many :members

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
