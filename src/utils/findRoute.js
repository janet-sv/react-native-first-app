import _ from 'lodash';

export default function(routes, title) {
  const index = _.findIndex(routes, (route) => {
    return route.title === title;
  });
  return routes[index];
};