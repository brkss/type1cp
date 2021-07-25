import { Query, Resolver } from 'type-graphql'


@Resolver()
export class DataResolver {


    @Query(() => String)
    data(){
        return 'hello from data';
    }

}