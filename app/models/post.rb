class Post < ApplicationRecord
  belongs_to :user
  has_many :attachments
end
