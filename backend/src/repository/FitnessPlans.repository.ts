import { connect } from '../config/db.config'
import { FitnessPlanModel } from '../model/FitnessPlan.model'

export class FitnessPlansRepository {
    constructor(){
        connect()
    }

    async getFitnessPlans(){
        const fitnessPlans = await FitnessPlanModel.find({})
        console.log('fitnessPlans:::', fitnessPlans)
        return fitnessPlans;
    }
}