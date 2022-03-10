interface SideMenuLink {
    to: string;
    icon: string;
}

export const availablePages: SideMenuLink[] = [
    {
        to: '/',
        icon: "home"
    },
    {
        to: '/portfolio',
        icon: "perm_identity"
    },
    {
        to: '/contacts',
        icon: "phone"
    },
    {
        to: '/about',
        icon: "question_mark"
    },
]