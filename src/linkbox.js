export default (links, onFail) => {
  const path = window.location.pathname;

  const userQuery = '/' + path.split('/')[1];

  const allValidQueries = Object.keys(links);

  let destination = links[userQuery];

  if (destination === undefined) {
    const userQueryNoSlash = userQuery.substring(1);

    const searchPredicates = [
      (key) => key.startsWith(userQuery),
      (key) => key.endsWith(userQueryNoSlash),
    ];

    for (const pred of searchPredicates) {
      const key = allValidQueries.find(pred);

      if (key !== undefined) {
        destination = links[key];
        break;
      }
    }
  }

  const hasHit = (destination !== undefined && path !== '/');

  if (hasHit) {
    window.location.replace(destination + path.replace(userQuery, ''));
  } else {
    if (onFail === undefined) {
      document.write('<h2>Page not found.</h2>');
    } else if (onFail !== null) {
      onFail(masterlist);
    }
  }
}