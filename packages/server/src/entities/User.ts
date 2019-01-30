import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';
import Job from './Job';

@Entity()
@ObjectType()
class User extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column('varchar', { unique: true, length: 512 })
  email: string;

  @Column()
  password: string;

  @Column('boolean', { default: false })
  confirmed: boolean;

  @Field(type => [Job])
  @OneToMany(type => Job, job => job.owner)
  jobs: Job[];
}

export default User;
