# Sudoku - Backtracking

El juego Sudoku consiste en rellenar un cubo de 9 x 9 celdas dispuestas en 9 subgrupos de 3 x 3 celdas, con números del 1 al 9, atendiendo a la restricción de que no se debe repetir el mismo número en la misma fila, columna o subgrupo de 9.

Dispone de varias celdas con un valor inicial, de modo que debemos empezar a resolver el problema a partir de esta solución parcial sin modificar ninguna de las celdas iniciales.

## Pseudocódigo backtracking Sudoku

```
Proc sudoku_VA (i, j: Nat; sol[1..9, 1..9] de 0..9; inicial[1..9, 1..9] de Bool)
   Si (inicial [i, j] = Falso) Entonces
      Para (k := 1) Hasta 9 Hacer
         sol[i, j] := k;                                 //marcar
         Si (es_factible (i, j, sol)) Entonces
            Casos
               i = 9 ^ j = 9 -> mostrarPorPantalla(sol);
               i < 9 ^ j = 9 -> sudoku_VA (i+1, 1, sol, inicial);
               i <= 9 ^ j < 9 -> sudoku_VA( i , j+1, sol, inicial);
            FinCasos;
         FinSi;
         sol[i, j] : = 0;                                //Desmarcar
      FinPara;
   En Otro Caso //inicial[i, j] = Cierto
      Casos
         i = 9 ^ j = 9 -> mostrarPorPantalla(sol);
         i < 9 ^ j = 9 -> sudoku_VA (i+1, 1, sol, inicial);
         i <= 9 ^ j < 9 -> sudoku_VA( i , j+1, sol, inicial);
      FinCasos;
   FinSi;
FinProc;
```

## Llamada inicial

```
Proc sudoku (sol[1..9, 1..9] de 0..9)
   Var 
      inicial[1..9, 1..9] de Bool;
   FinVar;
   Para (i := 1) Hasta 9 Hacer
      Para (j := 1) Hasta 9 Hacer
            inicial[i, j] := Sol[i, j] != 0;
      FinPara;
   FinPara;
   sudoku_VA(1, 1, sol, inicial);
FinProc;
```

## Funciones auxiliares

```
// comprueba la factibilidad de una solución parcial.
Fun es_factible (i, j : Nat; sol[1..9, 1..9] de 0..9) DEV Bool
   Var
      valido : Bool;
      k,l: Nat;
   FinVar;
   valido := True;
   k := 1;
   Mientras (k <= 9 ^ valido) Hacer                   //Comprobamos la columna
      Si ( sol[i, j] = sol[k, j] ^ k != i ){
         Valido := Falso;
      FinSi;
      k := k + 1;
   FinMientras;
   l := 1;
   Mientras (l <= 9 ^ valido) Hacer                   //Comprobamos la fila
      Si ( sol[i, j] = sol[i, l] ^ l != j ){
         Valido := Falso;
      FinSi;
      l := l + 1;
   FinMientras;
   //                         Lo anterior podría compactarse así, en un solo while que comprueba filas y columnas..
   // Mientras (k<=9 ^ valido) Hacer
   //    Si ( (sol[i, j] = sol[k, j] ^ k != i) v (sol[i, j] = sol[i, k] ^ k != j))
   //       Valido := Falso;
   //    FinSi;
   // FinMientras;
   k := correspondencia3x3(i);
   l :=  correspondencia3x3(j);                          //Comprobamos el subgrupo de 3x3
   Mientras ( k < correspondencia3x3(i) + 3 ^ valido ) Hacer //por razones de eficiencia puede antes de esta etapa, asignar a una variable
      Mientras ( l < correspondencia3x3(j) + 3 ^ valido) Hacer // el valor de correspondencia3x3(x) sea x=i o = j; así se evitan 2 llamadas
         Si ( sol[i, j] = sol[k, l] ^ i != k ^ j != l) Entonces // a dicha función traduciéndose en mejor eficiencia.
            valido := Falso;
         FinSi;
         l := l + 1;
      FinMientras;
      k := k + 1;
      l :=  correspondencia3x3(j);
   FinMientras;
   Devolver valido;
FinFun;
```

```
//  averiguar la celda inicial desde la que haremos la comprobación de factibilidad de una celda determinada en su correspondiente subgrupo de 3x3 celdas.
Fun correspondencia3x3 (i: Nat) DEV Nat
   Var
      k : Nat;
      resultado: Nat;
   FinVar;
   Si ( i MOD 3 = 0) Entonces 
      k := (i DIV 3);
   En Otro Caso
      k := ( I DIV 3) + 1;
   FinSi;
   Casos
      k = 1 -> resultado := 1;
      k = 2 -> resultado := 4;
      k = 3 -> resultado := 7;
   FinCasos;
   Devolver resultado;
FinFun;
```