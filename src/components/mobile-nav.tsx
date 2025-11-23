import { $, component$ } from '@builder.io/qwik'
import { ChangeLocale } from './change-locale/change-locale';

interface ItemProps {
    items: NavItem[]
}

export const MobileNav = component$<ItemProps>((props) => {
    const navClick = $((item: NavItem) => {
        const menu = document.getElementById('menu-switch') as HTMLInputElement;
        props.items.map(i => i.active.value = false);
        item.active.value = true;
        // close menu
        menu.checked = false;

    });
    return (
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <ChangeLocale></ChangeLocale>
                <label for="menu-switch" class="navbar-burger" role="button" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </label>
            </div>

            <input id="menu-switch" name="menu-switch" type="checkbox" />

            <div class="navbar-menu">
                <div class="navbar-end">
                    {props.items.map((item, index) => (
                        /* https://qwik.dev/docs/advanced/eslint/#jsx-key */
                        <a key={`nav-item${index}`} href={item.href} class={{ 'navbar-item': true, 'is-active': item.active.value }} onClick$={() => {
                            navClick(item);
                        }}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )

});
