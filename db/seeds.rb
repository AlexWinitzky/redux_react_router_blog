30.times do
  Blog.create(
    title: Faker::Book.title,
    author: Faker::DumbAndDumber.character,
    body: Faker::BackToTheFuture.quote,
    image_url: Faker::Avatar.image,
  )
  end

  puts '30 rows successfully created'