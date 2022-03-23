export interface TreeNode {
  nodeId: string | null
  content: React.ReactNode
  root?: boolean
  icon?: React.ReactNode
  subNodes?: TreeNode | TreeNode[]
}
