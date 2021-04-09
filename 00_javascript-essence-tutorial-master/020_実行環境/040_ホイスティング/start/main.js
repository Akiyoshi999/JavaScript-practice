a();

const a = function () {
  let c = 1;
  console.log(c);
};

function a() {
  console.log(c);
  let c = 1;
  function d() {
    console.log("d is called");
  }
  console.log("a is called");
}

console.log(b);
const b = 0;
