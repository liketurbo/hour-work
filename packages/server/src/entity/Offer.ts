import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User from './User';
import RelationColumn from '../graphql/utils/RelationColumn';
import Job from './Job';

@Entity()
@ObjectType()
class Offer extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field(type => Job)
  @ManyToOne(type => Job)
  job: Job;
  @RelationColumn()
  jobId: number;

  @Field(type => User)
  @ManyToOne(type => User)
  owner: User;
  @RelationColumn()
  ownerId: number;
}

export default Offer;
