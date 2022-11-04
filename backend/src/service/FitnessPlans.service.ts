import { FitnessPlansRepository } from '../repository/FitnessPlans.repository'

export class FitnessPlansService {
    private fitnessPlansRepository: FitnessPlansRepository

    constructor(){
        this.fitnessPlansRepository = new FitnessPlansRepository()
    }

    async getFitnessPlans(){
       return await this.fitnessPlansRepository.getFitnessPlans() 
    }
}