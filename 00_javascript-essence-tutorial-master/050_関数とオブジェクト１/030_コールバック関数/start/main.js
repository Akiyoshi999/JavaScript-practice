function hello(name) {
  console.log("hello " + name);
}
function bye() {
  console.log("by");
}

function fn(cb) {
  cb("Tom");
}

fn(hello);
fn(bye);
fn(function () {
  console.log("hello");
});

setTimeout(hello, 2000);
