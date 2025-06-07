import mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  userName: { type: String, required: true },
  orderId: { type: Number, required: true },
  prodId: { type: Number, required: true },
  value: { type: Number, required: true },
  date: { type: Number, required: true },
});
