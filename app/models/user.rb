class User
  attr_reader :id, :name, :password

  USERS = [
    new(1, "glen", "$2a$10$CoDVDQO11VrtwtD3Eo/f2evNaeULHpwXeMOOL8WpN7hBqjz8Je0SW"),
    new(2, "rob", "$2a$04$IfcQpss7kt1Nh1crMSUOC.bTQSjcxwvSwxD.bCvHmV5YsYzIk3/Xu"),
    new(3, "sharkie", "$2a$04$BIqMhj4hEJfb2gTcByjXbOftQfIBkft8nKlyddu2U07p6LiyoIeAW"),
    new(4, "xzyfer", "$2a$04$hVKN.wk4l6oTmzOJanWYSea8QR0vO4wBxIawHPzacUhpNKYuAtOlC")
  ]

  def self.find(id)
    USERS.find { |user|
      user.id == id
    }
  end

  def initialize(id, name, password)
    @id = id
    @name = name
    @password = BCrypt::Password.new(password)
  end

  def self.authenticate(username, password)
    USERS.find { |user|
      user.name == username && user.password == password
    }
  end
end
