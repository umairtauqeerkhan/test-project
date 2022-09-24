class AddUrlToAttachment < ActiveRecord::Migration[6.1]
  def change
    add_column :attachments, :url, :string
  end
end
