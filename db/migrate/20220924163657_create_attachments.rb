class CreateAttachments < ActiveRecord::Migration[6.1]
  def change
    create_table :attachments do |t|
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
