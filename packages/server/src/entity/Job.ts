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
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({ type: 'text' })
  description: string;

  @Field()
  @Column()
  location: string;

  @Field(type => User)
  @ManyToOne(type => User)
  owner: User;
  @RelationColumn()
  ownerId: number;
}

export default Job;
