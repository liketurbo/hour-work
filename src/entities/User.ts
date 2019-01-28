import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
  } from 'typeorm';

@Entity()
@ObjectType()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column('varchar', { unique: true, length: 512 })
  @Field()
  email: string;

  @Column()
  password: string;
}

export default User;
