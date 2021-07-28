import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { DataDefaultResponse } from '../utils/responses';
import { AddBaseInput } from '../utils/inputs';
import { Base } from '../entity';

@Resolver()
export class DataResolver {


    @Query(() => String)
    data(){
        return 'hello from data';
    }

    @Query(() => [Base])
    async history(){
        return Base.find();
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


}