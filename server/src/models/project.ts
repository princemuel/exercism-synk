import { model, Schema, Types } from 'mongoose';
import { IProject } from '~src/types';

interface TProject extends IProject {
  clientId: Types.ObjectId;
}

const ProjectSchema = new Schema<TProject>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
});

export const Project = model<TProject>('Project', ProjectSchema);
