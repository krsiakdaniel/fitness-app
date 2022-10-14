import { model, Model, Document, Schema } from 'mongoose'

export interface FitnessPlan extends Document {
    name: string,
    surname: string,
    age: number,
    creationDate: Date,
    updatedDate: Date
}

const FitnessPlanSchema: Schema = new Schema({
    name: { type: 'string', required: true },
    surname: { type: 'string', required: true },
    age: { type: 'number', required: true },
    creationDate: { type: 'Date', default: Date.now() },
    updatedDate: { type: 'Date', default: Date.now() }
})

export const FitnessPlanModel: Model<FitnessPlan> = model<FitnessPlan>('fitness_plans', FitnessPlanSchema)