import { Link } from "gatsby"
import { TreeNode } from "../components/layout/container/side-menu/TreeItem"

export type AvailablePages = "home" | "portfolio" | "contacts" | "about"
export type TopLevelPages = AvailablePages | ""

interface SideMenuLink {
  to: `/${AvailablePages}`
  pageName: AvailablePages
  icon: string
}

type ExplorerItems = {
  [key in AvailablePages]?: TreeNode[]
}

export const availablePages: SideMenuLink[] = [
  {
    to: "/home",
    pageName: "home",
    icon: "home",
  },
  {
    to: "/portfolio",
    pageName: "portfolio",
    icon: "perm_identity",
  },
  {
    to: "/contacts",
    pageName: "contacts",
    icon: "phone",
  },
  {
    to: "/about",
    pageName: "about",
    icon: "question_mark",
  },
]

export const explorerItems: ExplorerItems = {
  home: [
    {
      nodeId: null,
      content: <span style={{ fontSize: 14, fontWeight: 700 }}>HOME</span>,
      root: true,
      subNodes: [
        {
          nodeId: "home",
          content: <Link to="/home">home.html</Link>,
        },
      ],
    },
  ],
}
