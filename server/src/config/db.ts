import colors from 'colors';
import mongoose from 'mongoose';

if (process.env.NODE_ENV === 'development') {
  console.log(colors.america.toString);
}

export const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI || '');
    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(error);
  }
};
