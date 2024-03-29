class User
  attr_reader :id, :name, :password

  def initialize(id, name, password)
    @id = id
    @name = name
    @password = BCrypt::Password.new(password)
  end

  USERS = [
    new(1, 'glen',    '$2a$10$/H.s8th.ieVzI23/PMQNQ.DxsnEJVNUxKCJ7aNI9m5cgGH6dD06Oq'),
    new(2, 'ben',     '$2a$10$RUjEYuG9cYnbvjAI6K5sceUfEbXsDMlxXOQeRm/HRFvdJvReuD/S6'),
    new(3, 'fox',     '$2a$10$YGW4PdRy5D9jArodr8CW9uVGALY5YR1xU20nXCpAYt647eiHG6cjW'),
    new(4, 'isakiko', '$2a$10$JtO2lrbOwYBhOuKRZhASeu.8UXVNvJYJSVoGyGychz/AvPkB7a0vC'),
    new(5, 'xzyfer',  '$2a$10$PFJLm4n4BW/8yP7foehba.Kt8I1vNXl6cDt1NBkysRY5dtc75k/ea'),
    new(6, 'rob',     '$2a$10$fZHNAOoIYYUPl4dQN/Eo8.L/EyKwKIZg7XxW5pVaCHN4tG3BRIw8O'),
    new(7, 'jordan',  '$2a$10$vSTJu88elHnWahAiBBGAZe9Sj.tNgAnIqTgEZj5eX3Nwani1bulle'),
    new(8, 'sharkie', '$2a$10$HdCxRM9YVttdGLAw83hvHuokOZoVG5mShvMrmOZCHw6QqNU0vVF92'),
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
