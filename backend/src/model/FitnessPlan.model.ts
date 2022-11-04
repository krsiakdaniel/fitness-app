import { model, Schema, Model, Document } from 'mongoose'

export interface FitnessPlan extends Document {
    fitness_plan_id: string, 
    fitness_plan_name: string, 
    date_created: Date,
    date_updated: Date,
    created_by: string,
    updated_by: string
}

const FitnessPlanSchema: Schema = new Schema({
    fitness_plan_id: { type: String, required: true }, 
    fitness_plan_name: { type: String, required: true }, 
    date_created: { type: Date, default: Date.now() },
    created_by: { type: String, required: true },
})

export const FitnessPlanModel: Model<FitnessPlan> = model<FitnessPlan>('FitnessPlan', FitnessPlanSchema)