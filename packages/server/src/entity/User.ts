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

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  email?: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ unique: true, nullable: true })
  vkontakteId?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  pictureUrl?: string;

  @Column({ default: false })
  confirmed: boolean;

  @Field(type => [Job])
  @OneToMany(type => Job, job => job.owner)
  jobs: Job[];
}

export default User;
