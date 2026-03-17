import mongoose from 'mongoose';
// type,default,validation(messages),criteria(min_length,max_length,trim),enum
const subscriptionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Subscription Name is Required'],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: [true, 'Subscription Number is Required'],
      min: [0, 'Price Must be Greater Than 0'],
    },
    currency: {
      type: String,
      default: 'USD',
      enum: ['USD', 'EUR', 'GBP'],
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
      type: String,
      enum: [
        'sports',
        'news',
        'entertainment',
        'lifestyle',
        'technology',
        'finance',
        'politics',
        'other',
      ],
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'cancelled', 'expired'],
      default: 'active',
    },
    startDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: 'The start date must be in the bast',
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return this.startDate < value;
        },
        message: 'The renewal date must be after start date',
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);
