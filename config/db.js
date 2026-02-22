import mongoose from 'mongoose';

const connectDB = async () => {
	const uri = process.env.MONGODB_URI || 'mongodb+srv://ramit:ramit123@cluster0.t85cihd.mongodb.net/myDatabase?retryWrites=true&w=majority';
	try {
		await mongoose.connect(uri);
        useNewUrlParser: true;
        useUnifiedTopology: true;
		console.log('MongoDB connected');
	} catch (err) {
		console.error('MongoDB connection error:', err);
		process.exit(1);
	}
};

export default connectDB;