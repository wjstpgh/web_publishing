const obj = {
  one: "uno",
  two: "dow",
  three: "tres",
};
let k: keyof typeof obj;
for (const k in obj) {
  const v = obj[k];
}

interface ABC {
  a: string;
  b: string;
  c: string;
}

function foo(abc: ABC) {
  // let k: keyof ABC;
  // for (k in abc) {
  //   const v = abc[k];
  // }
  for (const [k, v] of Object.entries(abc)) {
    k; //string
    v; //any
  }
}

const x = { a: "a", b: "b", c: "c", d: new Date() };
foo(x);
