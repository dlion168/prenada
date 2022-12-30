import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ChecklistItemSchema = new Schema({
  checked: Boolean, 
  text: String,
  liked: Boolean
});

const ChecklistItem = mongoose.model('ChecklistItem', ChecklistItemSchema);
export default ChecklistItem;