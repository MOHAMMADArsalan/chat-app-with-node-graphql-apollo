import mongoose from 'mongoose';

const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: String,
  category: String,
  location: {
    type: { type: String },
    coordinates: [],
  },
});
LocationSchema.index({ location: '2dsphere' });

export default mongoose.model('places', LocationSchema);
