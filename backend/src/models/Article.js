import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  topic: String,
  title: String,
  id: Number,
  pic: String,
  tag: String,
});

const Article = mongoose.model('Article', ArticleSchema);
export default Article;