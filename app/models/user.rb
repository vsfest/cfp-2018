class User
  attr_reader :id, :name, :password

  def initialize(id, name, password)
    @id = id
    @name = name
    @password = BCrypt::Password.new(password)
  end

  USERS = [
    new(1, 'glen',    '$2a$10$CoDVDQO11VrtwtD3Eo/f2evNaeULHpwXeMOOL8WpN7hBqjz8Je0SW'),
    new(2, 'rob',     '$2a$04$IfcQpss7kt1Nh1crMSUOC.bTQSjcxwvSwxD.bCvHmV5YsYzIk3/Xu'),
    new(3, 'sharkie', '$2a$04$BIqMhj4hEJfb2gTcByjXbOftQfIBkft8nKlyddu2U07p6LiyoIeAW'),
    new(4, 'xzyfer',  '$2a$04$hVKN.wk4l6oTmzOJanWYSea8QR0vO4wBxIawHPzacUhpNKYuAtOlC'),
    new(5, 'fox',     '$2a$04$iDwViheGjdJolRmWocJEheIKazndSq.tj1aQgUIvyak4pWiF2IJnW'),
    new(6, 'ben',     '$2a$04$/KLRvhsZ2GwXd8YDHcX9TeRLKHVlHhQkOCTjlb9LJWCJk1uWlqe/6'),
    new(7, 'jordan',  '$2a$04$V5z3dX8QdMM.Wxy1d94D9uVGelU5y.JBq9grvdhUcdKHFEkt9stWa')
  ]

  def self.find(id)
    USERS.find { |user|
      user.id == id
    }
  end

  def self.authenticate(username, password)
    USERS.find { |user|
      user.name == username && user.password == password
    }
  end
end
