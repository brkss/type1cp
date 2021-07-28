import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';


@ObjectType()
@Entity()
export class Base extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    bg_before: number;

    @Field()
    @Column()
    carbs: number;

    @Field({nullable: true})
    @Column({default: null})
    bg_after?: number;

    @Field({nullable: true})
    @Column({default: null})
    insulin_taken?: number;

    @Field()
    @Column({default: false})
    hypoglycemia?: boolean;

    @Field()
    @Column({default: 0})
    correction?: number;

    @Field()
    @CreateDateColumn()
    created_at: Date;

    @Field()
    @UpdateDateColumn()
    updated_at: Date;

}