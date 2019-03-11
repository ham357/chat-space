class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :image?
<<<<<<< HEAD
  mount_uploader :image, ImageUploader
=======
>>>>>>> parent of 21aac9c... Revert "Merge pull request #9 from ham357/Create-Message-Model"
end
