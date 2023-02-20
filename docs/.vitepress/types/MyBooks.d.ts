import type { TableColumnsType, TableProps } from 'ant-design-vue'
type ColumnKeys = 'name' | 'progress' | 'times' | 'status'

export interface BKColumn {
  title: string
  dataIndex: ColumnKeys
  key: ColumnKeys
}

type DSArray = Array<Record<ColumnKeys, string> & { key: string }>
type DS<T extends TableProps['dataSource']> = T


export type BKColumns = TableColumnsType<BKColumn>
export type BKData = DS<DSArray>
