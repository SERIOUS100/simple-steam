import { MenuItem } from "./services/menu.service";

export const AppMenuItems: Array<MenuItem>=[
    {
        text: 'Games',
        route: '/games'
    },
    {
        text: 'Library',
        route: '/library'
    },
    {
        text: 'Friends',
        route: '/friends'
    },
    {
        text: 'Profile',
        route: '/profile'
    }
]