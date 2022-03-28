import { Link } from "gatsby"
import type { AvailablePages, TreeNode } from "./types"

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
  portfolio: [
    {
      nodeId: null,
      content: <span style={{ fontSize: 14, fontWeight: 700 }}>PORTFOLIO</span>,
      root: true,
      subNodes: [
        {
          nodeId: "portfolio",
          content: <Link to="/portfolio">portfolio.html</Link>,
        },
      ],
    },
  ],
  contacts: [
    {
      nodeId: null,
      content: <span style={{ fontSize: 14, fontWeight: 700 }}>CONTACTS</span>,
      root: true,
      subNodes: [
        {
          nodeId: "contacts",
          content: <Link to="/contacts">contacts.html</Link>,
        },
      ],
    },
  ],
  about: [
    {
      nodeId: null,
      content: <span style={{ fontSize: 14, fontWeight: 700 }}>ABOUT</span>,
      root: true,
      subNodes: [
        {
          nodeId: "about",
          content: <Link to="/about">about.html</Link>,
        },
      ],
    },
  ],
}
