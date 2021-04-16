# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(id: 2, username:'Demo', email:'Demo@DemoUser.Demo', password:'123456')
User.create!(id: 1, username:'Mike', email:'Mike@MikeUser.Mike', password:'123456')

Product.delete_all
Product.create!(id:1, title:'PuppyBasket', description:'a basket for puppies', price:39, user_id:2)

Review.delete_all
Review.create(id:1, title:'PuppyBasket', body:'best puppy basket ever!', rating: 5, user_id:2, product_id:1)