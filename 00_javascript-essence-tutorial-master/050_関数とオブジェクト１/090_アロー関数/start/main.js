function a(name) {
  return "hello" + name;
}

const b = function (name) {
  return "hello" + name;
};

const c = (name) => {
  return "hello" + name;
};
const d = (name) => "hello" + name;

console.log(d("Tom"));

const e = (name, name1) => {
  return "hello" + name + name1;
};

console.log(e("BOB", "TOM"));
