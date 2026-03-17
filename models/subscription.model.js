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
      required: [true, 'Subscription frequency is required'],
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
      required: [true, 'Subscription start date is required'],
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

// Hooks act as middle ware pre | post DB interaction
// fill missed info from exist data pre save
subscriptionSchema.pre('save', function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency],
    );
  }

  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }

  next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
