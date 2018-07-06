import mongoose from 'mongoose';

const { Schema } = mongoose;
const STATUS = ['waiting', 'approved', 'dicline', 'blocked'];

const UserFriend = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    friend: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    status: {
      type: String,
      enum: STATUS,
    },
  },
  { timestamps: true },
);

export default mongoose.model('friends', UserFriend);
