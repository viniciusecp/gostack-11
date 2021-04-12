import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Generated,
} from 'typeorm';

@Entity('user_tokens')
class UserToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryGeneratedColumn('uuid')
  token: string;

  @Column()
  @Generated('uuid')
  created_at: Date;

  @Column()
  user_id: string;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserToken;
