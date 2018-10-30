json.content @message.content
json.image @message.image.url
json.user_id @message.user.id
json.user_name @message.user.name
json.date @message.created_at.to_s(:published_on)
json.message_id @message.id
