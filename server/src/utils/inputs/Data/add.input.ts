import { InputType, Field } from "type-graphql";

@InputType()
export class AddBaseInput {

    @Field()
    bg_before: number;

    @Field()
    carbs: number;


}