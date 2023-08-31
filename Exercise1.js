'use strict'
// Write a string for each case that would satisfy at least one match for the following regular expressions:

let a = /.abc/;
let a_sol = "aabc";
console.log(`String "${a_sol}" matches ${a}: ${a.test(a_sol)}`);

let b = /a+b?!!1{4}/;
let b_sol = "aaaaaa!!1111";
console.log(`String "${b_sol}" matches ${b}: ${b.test(b_sol)}`);

let c = /.{3}a\.b/;
let c_sol = "aaaa.b";
console.log(`String "${c_sol}" matches ${c}: ${c.test(c_sol)}`);

let d = /\w/;
let d_sol = "_";
console.log(`String "${d_sol}" matches ${d}: ${d.test(d_sol)}`);

let e = /\s/;
let e_sol = " ";
console.log(`String "${e_sol}" matches ${e}: ${e.test(e_sol)}`);

let f = /\d/;
let f_sol = "1";
console.log(`String "${f_sol}" matches ${f}: ${f.test(f_sol)}`);

let g = /./;
let g_sol = ".";
console.log(`String "${g_sol}" matches ${g}: ${g.test(g_sol)}`);

let h = /[abc]/;
let h_sol = "b";
console.log(`String "${h_sol}" matches ${h}: ${h.test(h_sol)}`);

let i = /(abc)/;
let i_sol = "abc";
console.log(`String "${i_sol}" matches ${i}: ${i.test(i_sol)}`);

let j = /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/;
let j_sol = "$.@$.$.$.com";
console.log(`String "${j_sol}" matches ${j}: ${j.test(j_sol)}`);

let k = /\([0oOn]{1}(_|\s)[0oOn]{1}\)/;
let k_sol = "(n_n)";
console.log(`String "${k_sol}" matches ${k}: ${k.test(k_sol)}`);