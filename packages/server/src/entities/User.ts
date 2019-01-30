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
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  readonly id: number;

  @Column()
  @Field()
  firstName: string;

  @Column('varchar', { unique: true, length: 512 })
  @Field()
  email: string;

  @Column()
  password: string;

  @Column('boolean', { default: false })
  confirmed: boolean;

  @OneToMany(type => Job, job => job.owner)
  @Field(type => [Job])
  jobs: Job[];
}

export default User;
