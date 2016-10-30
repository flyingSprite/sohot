
import { Map, List } from 'immutable';

const APP_MENUS = List.of(
  Map({
    title: 'Form Elements',
    icon: 'assignment',
    link: '/form-elements',
    subMenus: List.of(
      Map({
        title: 'Input',
        link: '/form-elements/input',
      })
    )
  }),
  Map({
    title: 'Layout',
    icon: 'border_outer',
    subMenus: List.of()
  }),
  Map({
    title: 'Plugin',
    icon: 'rotate_90_degrees_ccw',
    link: '/plugin',
    subMenus: List.of(
      Map({
        title: 'Full Calendar',
        link: '/plugin/full-calendar'
      })
    )
  }),
  Map({
    title: 'Library',
    icon: 'straighten',
    link: '/library',
    subMenus: List.of(
      Map({
        title: 'Material Design Icon',
        link: '/library/material-design-icon',
      })
    )
  })
);

export default APP_MENUS;
