//        var a = "*";
//    for (var i=1;i<=13;i++) {
//      if (i === 1 || i === 13) {
//        console.log('    ' + a);
//      }
//      if (i === 2 || i === 12 || i === 5 || i === 6) {
//
//        console.log('   ' + a + a + a);
//
//      }
//      if (i === 3 || i === 7 || i === 11) {
//        console.log('  ' + a + a + a + a + a );
//
//      }
//      if (i === 4 || i === 8 || i === 10) {
//        console.log(' ' + a + a + a + a + a + a + a );
//      }
//      if (i === 9) {
//        console.log( a + a + a + a + a + a + a + a + a );
//      }
//
//    }
var kleur = "*";
var gurriez = "";
var x;
for ( var ramoz = 0; ramoz<=12; ramoz++ ){
  x=kleur+kleur+kleur+kleur+kleur+kleur+kleur+kleur+kleur;
  if (ramoz === 0 || ramoz === 13) {
    x = (x.slice(8));
    }
  console.log(x);
}