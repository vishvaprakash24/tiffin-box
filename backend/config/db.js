import mongoose from 'mongoose';
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vishvaprakashmaddheshiya:Vishva%40123@admin.rqsneww.mongodb.net/database').then(()=>console.log("DB Connected"))
}