import mongoose from "mongoose"

const transactionSchema = mongoose.Schema({
    user: { 
        type: String,
        required: true
     },
  amount: { 
    type: Number, 
    required: true,
    min: [0, 'Amount must be positive'] 
},
  type: { 
    type: String, 
    enum: ['Course', 'Withdrawal', "New Sales", "Course Purchase", "Deposit"], 
     required: true 
},
  paymentMethod: { 
     type: String, 
     required: true
  },  
  status: { type: String, 
    enum: ['Pending', 'Completed', 'Failed'], 
    default: 'Pending' },
    
    imageUrl: { 
      type: String,
      required: true
    },
    courseType: {
      type: String,
      enum: ['UBB', 'AffiliateLab', "HubSpotAcademy", "SavageAffiliates"],
    
    }
}, {
  timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;