const sum = require('./sum');

test('sumo 2 + 2 y debe ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('sumo 7 + 0 y debe ser 4', () => {
    expect(sum(7, 0)).toBe(7);
  });

  test('sumo 5 + 1 y debe ser 6', () => {
    expect(sum(5, 1)).toBe(6);
  });  

  test('sumo 3 + 9 y debe ser 12', () => {
    expect(sum(3, 9)).toBe(12);
  });  
  


  /// SUITE PRUEBAS MATCH
  // Ver perfiles que no hecho match
  // 1 usuairo con pocos match nos e reomiende a varios perfiles
  // 1 usuairo con varios match se reomiende a varios perfiles
  // se recomienden perfiles con interese
  // Que se haga match solo cuando los dos se dan like:
//         usuairo 1 debe darle like a usuario 2, usuario 2 dar like a usuairo 1 y en ese momento match
//         usuairo 1 debe darle like a usuario 2, usuario 2 no debe hacer nada  no debe existir match
//         usuairo 2 debe darle like a usuario 1, usuario 1 no debe hacer nada> no debe existir match
//          




  


