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
    new(7, 'jordan',  '$2a$04$V5z3dX8QdMM.Wxy1d94D9uVGelU5y.JBq9grvdhUcdKHFEkt9stWa'),
    new(8, 'isakiko', '$2a$04$yx33PKJ.KqAZJbn2WwfLc.p7gixiu1xUBPHmqDAggzyzUMLeI5oGO'),
    new(9, 'jed',     '$2a$04$uhu7qi1rSPcuyCNzd30yTuVNItYpGOx/mq9O6ctLs9r7RKUYd0zLu'),
    new(10,'kriesse', '$2a$04$ltFT3vhfY91f/RcEy9h0l.Y0wep8zIAXKE8z9s4qIL.gnsgD3FRCe')
  ]
  USERS_BY_ID = USERS.index_by(&:id)

  def self.find(id)
    USERS_BY_ID[id]
  end

  def self.authenticate(username, password)
    USERS.find { |user|
      user.name == username && user.password == password
    }
  end
end
