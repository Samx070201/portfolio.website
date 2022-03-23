import { Link } from "gatsby"
import type { AvailablePages, TopExplorerItem, TreeNode } from "./types"

interface SideMenuLink {
  to: `/${AvailablePages}`
  pageName: AvailablePages
  icon: string
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

type ExplorerItems = {
  [key in AvailablePages]?: TreeNode[]
}

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

export const visitedPages: TopExplorerItem[] = [
  {
    icon: "html",
    title: "home",
  },
  {
    icon: "html",
    title: "about",
  },
]
