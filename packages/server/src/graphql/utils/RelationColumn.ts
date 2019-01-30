import { ColumnOptions, Column } from 'typeorm';

const RelationColumn = (options?: ColumnOptions) =>
  Column({ nullable: true, ...options });

export default RelationColumn;
