import { $, component$ } from '@builder.io/qwik';
import { ChangeLocale } from './change-locale/change-locale';

interface ItemProps {
  items: NavItem[]
}
export const HeroFoot = component$<ItemProps>((props) => {
  const navClick = $((item: NavItem) => {
    props.items.map(i => i.active.value = false);
    item.active.value = true;
  });
  return (
    <div class="hero-foot">
      <div class="hero-foot--wrapper">
        <div class="columns">
          <div class="column is-12 hero-menu-desktop has-text-centered">
            <ul>
              {props.items.map((item, index) => (
                <li key={`nav-item${index}`} class={{ 'is-active': item.active.value }} onClick$={() => {
                  navClick(item);
                }}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
            <ChangeLocale></ChangeLocale>
          </div>
        </div>
      </div>
    </div>
  )
});




