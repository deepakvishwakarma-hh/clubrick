// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components


import Label from '../label';
import Iconify from '../iconify/Iconify';
import SvgColor from '../svg-color/SvgColor';
// ----------------------------------------------------------------------

const icon = (name: string) => (
    <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
    blog: icon('ic_blog'),
    cart: icon('ic_cart'),
    chat: icon('ic_chat'),
    mail: icon('ic_mail'),
    user: icon('ic_user'),
    file: icon('ic_file'),
    lock: icon('ic_lock'),
    label: icon('ic_label'),
    blank: icon('ic_blank'),
    kanban: icon('ic_kanban'),
    folder: icon('ic_folder'),
    banking: icon('ic_banking'),
    booking: icon('ic_booking'),
    invoice: icon('ic_invoice'),
    calendar: icon('ic_calendar'),
    disabled: icon('ic_disabled'),
    external: icon('ic_external'),
    menuItem: icon('ic_menu_item'),
    ecommerce: icon('ic_ecommerce'),
    analytics: icon('ic_analytics'),
    dashboard: icon('ic_dashboard'),
    whites: icon('ic_whites'),
    women_whites: icon('ic_women_whites'),
    breif: icon('ic_breif'),
    casual: icon('ic_casual'),
    bottomware: icon('ic_bottomware'),
    bikini: icon('ic_bikini'),
    women_casual: icon('ic_women_casual'),
    women_bottom: icon('ic_women_bottom'),

};

const navConfig = [
    {
        subheader: 'Men ',
        items: [
            // USER
            {
                title: 'Professional Whites',
                path: PATH_DASHBOARD.user.root,
                icon: ICONS.whites,
                children: [
                    { title: 'Half Sleeve', path: PATH_DASHBOARD.user.profile },
                    { title: 'Full Sleeve', path: PATH_DASHBOARD.user.cards },
                    { title: 'White Track', path: PATH_DASHBOARD.user.cards },
                ],
            },
            {
                title: 'Sports Innerware',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.breif,
                children: [
                    { title: 'White Vest', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Color Vest', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Breif', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Trunks', path: PATH_DASHBOARD.eCommerce.demoView },
                    { title: 'Boxer', path: PATH_DASHBOARD.eCommerce.list },
                    { title: 'Boxer Breif', path: PATH_DASHBOARD.eCommerce.new },
                    { title: 'Midway Breif', path: PATH_DASHBOARD.eCommerce.demoEdit },
                ],
            },
            {
                title: 'Casual Sportsware',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.casual,
                children: [
                    { title: 'Polo T-Shirts', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'V Neck T-Shirts', path: PATH_DASHBOARD.eCommerce.demoView },
                    { title: 'Round Neck T-Shirts', path: PATH_DASHBOARD.eCommerce.list },
                    { title: 'Scoop Neck T-Shirts', path: PATH_DASHBOARD.eCommerce.new },
                    { title: 'Cowl Neck T-Shirts', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Sleeveless T-Shirts', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Oversized T-Shirts', path: PATH_DASHBOARD.eCommerce.demoEdit },
                ],
            },
            {
                title: 'Bottomware',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.bottomware,
                children: [
                    { title: 'Track Pants', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Shorts', path: PATH_DASHBOARD.eCommerce.demoView },
                    { title: 'Three-Fourths', path: PATH_DASHBOARD.eCommerce.list },
                ],
            },
        ]

    },
    {
        subheader: 'Women ',
        items: [
            // USER
            {
                title: 'Professional Whites',
                path: PATH_DASHBOARD.user.root,
                icon: ICONS.women_whites,
                children: [
                    { title: 'Half Sleeve', path: PATH_DASHBOARD.user.profile },
                    { title: 'Full Sleeve', path: PATH_DASHBOARD.user.cards },
                    { title: 'White Track', path: PATH_DASHBOARD.user.cards },
                ],
            },
            {
                title: 'Sports Innerware',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.bikini,
                children: [
                    { title: 'Sports Bra', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Hipster', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Boyshorts', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Bikini', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Thong', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Strings', path: PATH_DASHBOARD.eCommerce.demoEdit },
                ],
            },
            {
                title: 'Casual Sportsware',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.women_casual,
                children: [
                    { title: 'Polo T-Shirts', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'V Neck T-Shirts', path: PATH_DASHBOARD.eCommerce.demoView },
                    { title: 'Round Neck T-Shirts', path: PATH_DASHBOARD.eCommerce.list },
                    { title: 'Scoop Neck T-Shirts', path: PATH_DASHBOARD.eCommerce.new },
                    { title: 'Cowl Neck T-Shirts', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Sleeveless T-Shirts', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Oversized T-Shirts', path: PATH_DASHBOARD.eCommerce.demoEdit },
                ],
            },
            {
                title: 'Bottomware',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.women_bottom,
                children: [
                    { title: 'Track Pants', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Shorts', path: PATH_DASHBOARD.eCommerce.demoView },
                    { title: 'Three-Fourths', path: PATH_DASHBOARD.eCommerce.list },
                ],
            }
        ]

    },
    {
        subheader: 'Accessories',
        items: [
            // USER
            {
                title: 'Bags & Backpack',
                path: PATH_DASHBOARD.user.root,
                icon: ICONS.women_whites,
                children: [
                    { title: 'Sports Bag', path: PATH_DASHBOARD.user.profile },
                    { title: 'Backpack', path: PATH_DASHBOARD.user.cards },
                    { title: 'Travel Bag', path: PATH_DASHBOARD.user.cards },
                    { title: 'Trolley Bag', path: PATH_DASHBOARD.user.cards },
                ],
            },
            {
                title: 'Styling Accessories',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.bikini,
                children: [
                    { title: 'Sun Galss', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Cap', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Water Bottles', path: PATH_DASHBOARD.eCommerce.demoEdit },
                    { title: 'Wrist & Head Bands', path: PATH_DASHBOARD.eCommerce.demoEdit },
                ],
            },
            {
                title: 'Racket Games',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.women_casual,
                children: [
                    { title: 'Badmiton', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Tennis', path: PATH_DASHBOARD.eCommerce.demoView },
                    { title: 'Table Tennis', path: PATH_DASHBOARD.eCommerce.list },
                ],
            },
            {
                title: 'Athletics',
                path: PATH_DASHBOARD.eCommerce.root,
                icon: ICONS.women_bottom,
                children: [
                    { title: 'Track Pants', path: PATH_DASHBOARD.eCommerce.shop },
                    { title: 'Shorts', path: PATH_DASHBOARD.eCommerce.demoView },
                    { title: 'Three-Fourths', path: PATH_DASHBOARD.eCommerce.list },
                ],
            }
        ]

    },


];

export default navConfig;
