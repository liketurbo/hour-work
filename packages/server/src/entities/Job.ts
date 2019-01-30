import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm';
import User from './User';
import RelationColumn from '../graphql/utils/RelationColumn';

@Entity()
@ObjectType()
class Job extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  readonly id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  location: string;

  @Field(type => User)
  @ManyToOne(type => User)
  owner: User;
  @RelationColumn()
  ownerId: number;
}

export default Job;
