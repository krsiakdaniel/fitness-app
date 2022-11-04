import { FitnessPlansService } from '../service/FitnessPlans.service'
import { logger } from '../utils/Logger'

export class FitnessPlanController {
    public fitnessPlansService: FitnessPlansService

    constructor(){
        this.fitnessPlansService = new FitnessPlansService()
    }

    async getFitnessPlans(){
        logger.info('Controller: getFitnessPlans', null)
        return await this.fitnessPlansService.getFitnessPlans()
    }
}