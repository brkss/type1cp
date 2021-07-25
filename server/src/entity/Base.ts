import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Base {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    bg_before: number;

    @Field()
    @Column()
    carbs: number;

    @Field()
    @Column()
    bg_after: number;

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