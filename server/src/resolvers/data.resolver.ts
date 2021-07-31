import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { DataDefaultResponse } from '../utils/responses';
import { AddBaseInput, UpdateBaseDataInput } from '../utils/inputs';
import { Base } from '../entity';

@Resolver()
export class DataResolver {


    @Query(() => String)
    data(){
        return 'hello from data';
    }

    @Query(() => [Base])
    async history(){
        return Base.find({order: {id: 'DESC'}});
    }

    @Mutation(() => DataDefaultResponse)
    async createBaseData(@Arg('data') data: AddBaseInput) : Promise<DataDefaultResponse>{

        if(!data || !data.bg_before || !data.carbs){
            return {
                status: false,
                message: 'Invalid Data !'
            }
        }

        try{
            const base = new Base();
            base.bg_before = data.bg_before;
            base.carbs = data.carbs;
            await base.save(); 
            return {
                status: true,
                base: base
            };
        }catch(e){
            console.log('create Base data error => ', e);
            return {
                status: false,
                message: 'Something went wrong !'
            }
        }

    }

    // update data ! 
    @Mutation(() => DataDefaultResponse)
    async updateBaseData(@Arg('data') data : UpdateBaseDataInput) : Promise<DataDefaultResponse>{
        if(!data || !data.id){
            return {
                status: false,
                message: 'Invalid Data !'
            }
        }

        // find the current base data 
        const baseData = await Base.findOne({where: {id: data.id}});
        if(!baseData){
            return {
                status: false,
                message: 'Base Data not found !'
            }
        }
        try{

            baseData.bg_after = data.bg_after || baseData.bg_after;
            baseData.bg_before = data.bg_before;
            baseData.carbs = data.carbs;
            baseData.correction = data.correction || baseData.correction;
            baseData.hypoglycemia = data.hypoglycemia || baseData.hypoglycemia;
            baseData.insulin_taken = data.insulin_taken || baseData.insulin_taken;
            await baseData.save();
            return {
                status: true,
                base: baseData
            }

        }catch(e){
            console.log("error while updating base data => ", e);
            return {
                status: false,
                message: 'Something went wrong !'
            }
        }
    }


}