json.array! @new_message do |message|
    json.user_name message.user.name
    json.date message.created_at.to_s(:published_on)
    json.content message.content
    json.image message.image.url
    json.message_id message.id
end
