// uses the import function to dynamically import a Vue component.
function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `../views/${view}.vue`);
}

const routes = [
  {
    path: '/template',
    name: 'Template',
    component: loadView('Template'),
  },
];

export default routes;
