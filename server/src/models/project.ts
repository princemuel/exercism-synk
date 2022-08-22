import { model, Schema } from 'mongoose';
import { TProject } from '~src/types';

const ProjectSchema = new Schema<TProject>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['todo', 'doing', 'done'],
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
});

export const Project = model<TProject>('Project', ProjectSchema);
