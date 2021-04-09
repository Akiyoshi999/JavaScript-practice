// 関数スコープ
function a() {
  let b = 0;
  console.log(b);
}
a();

// ブロックスコープ
// var は使えない
{
  const c = 1;
  console.log(c);

  const d = function () {
    console.log("d is called");
  };
}

d();
