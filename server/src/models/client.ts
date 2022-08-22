import { model, Schema } from 'mongoose';
import { IClient } from '~src/types';

const ClientSchema = new Schema<IClient>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

export const Client = model<IClient>('Client', ClientSchema);
