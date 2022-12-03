import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  topic: String,
  topicPic: String,
  article: [{
    id: Number,
    pic: String,
    tag: String,
    summary: String
  }]
});

const Topic = mongoose.model('Topic', TopicSchema);
export default Topic;