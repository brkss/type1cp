import { Base } from '../../../entity';
import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class DataDefaultResponse {

    @Field(() => Boolean)
    status: boolean;

    @Field(() => String, {nullable: true})
    message?: string;

    @Field(() => Base, {nullable: true})
    base?: Base 

}