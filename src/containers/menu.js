
const APP_MENUS = [
  {
    title: 'Form Elements',
    icon: 'assignment',
    link: '/form-elements',
    subMenus: [
      {
        title: 'Input',
        link: '/form-elements/input',
      }
    ]
  }, {
    title: 'Layout',
    icon: 'border_outer',
    subMenus: []
  }, {
    title: 'Plugin',
    icon: 'rotate_90_degrees_ccw',
    link: '/plugin',
    subMenus: [
      {
        title: 'Full Calendar',
        link: '/plugin/full-calendar'
      }
    ]
  }, {
    title: 'Library',
    icon: 'straighten',
    link: '/library',
    subMenus: [
      {
        title: 'Material Design Icon',
        link: '/library/material-design-icon',
      }
    ]
  }, {
    title: 'Redux Form',
    icon: 'straighten',
    link: '/redux-form',
    subMenus: [
      {
        title: 'Simple Form',
        link: '/redux-form/simple',
      }, {
        title: 'Sync Validation Form',
        link: '/redux-form/syncValidation',
      }, {
        title: 'Async Validation Form',
        link: '/redux-form/asyncValidation',
      }
    ]
  }
];

export default APP_MENUS;
