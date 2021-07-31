import { Field, InputType } from 'type-graphql';

@InputType()
export class UpdateBaseDataInput {

    @Field()
    id: number;
    
    @Field()
    bg_before: number;

    @Field()
    carbs: number;
    
    @Field({nullable: true})
    bg_after?: number;
    
    @Field({nullable: true})
    insulin_taken?: number;
    
    @Field({nullable: true})
    correction?: number;
    
    @Field({nullable: true})
    hypoglycemia?: boolean;
    

}