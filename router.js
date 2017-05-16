var ret1 = JSON.stringify({
  "1.1": {
    "id": 1,
    name: "test1"
  },
  "1.2": {
    id: 2,
    name: "test2"
  }
});

var ret2 = JSON.stringify({
  "2.1": {
    "id": 1,
    name: "test1"
  },
  "2.2": {
    id: 2,
    name: "test2"
  }
});

function route(pathname) {
  if (pathname.indexOf('user') > -1) {
    return ret1;
  } else {
    return ret2;
  }
}

exports.route = route;
