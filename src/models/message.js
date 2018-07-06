import mongoose from 'mongoose';

const { Schema } = mongoose;

const MessageSchema = new Schema({
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
}, { timestamps: true });

export default mongoose.model('message', MessageSchema);
