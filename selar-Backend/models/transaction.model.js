import mongoose from "mongoose"

const transactionSchema = mongoose.Schema({
    user: { 
        type: String,
        required: true
     },
  amount: { 
    type: Number, 
    required: true 
},
  type: { 
    type: String, 
    enum: ['Course', 'Withdrawal', "New Sales", "Course Purchase"], 
     required: true 
},
//   transactionHash: { 
//     type: String, 
//     required: true
//  },  // Bitcoin transaction hash
  status: { type: String, 
    enum: ['Pending', 'Completed', 'Failed'], 
    default: 'Pending' },
    
    imageUrl: { // Store the Cloudinary URL
      type: String,
     // required: true
    },
    courseType: {
      type: String,
      enum: ['UBB', 'AffiliateLab', "HubSpotAcademy", "SavageAffiliates"],
      required: true
    }
}, {
  timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;