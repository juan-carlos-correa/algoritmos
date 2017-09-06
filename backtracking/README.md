# Algoritmos y estructuras de datos - Backtracking

Explicación del algoritmo Backtracking (también llamado búsqueda atrás o en retroceso).

## Definición

Es una estrategia para encontrar soluciones a problemas que satisfacen restricciones.

## Explicación

Este algoritmo puede encontrar todas o algunas soluciones a problemas computacionales, especialmente a problemas de satisfacción de restricciones, que incrementa gradualmente los candidatos a las soluciones y abandona cada candidato parcial (backtracks) tan pronto como determina que el candidato no puede dar una solución.

## Pseudocódigo

Para aplicar backtracking a un problema particular, se deben proporcionar datos P para la instancia particular del problema a resolver, y seis parámetros de procedimiento: root, reject, accept, first, next y output. Estos procedimientos deben tomar los datos de instancia P como un parámetro y deben hacer lo siguiente:

* root(P): devuelve el candidato parcial en la raíz del árbol de búsqueda.
* rechazar(p,c): devolver verdadero sólo si el candidato parcial c no vale la pena completar.
* accept(P,c): devuelve true si c es una solución de P, y false en caso contrario.
* first(P,c): generar la primera extensión del candidato c.
* next(P,s): generar la siguiente extensión alternativa de un candidato, después de la extensión s.
* output(P,c): utilizar la solución c de P, según corresponda la aplicación.

El algoritmo reduce el problema a la llamada bt(root(P)) donde bt es el siguiente procedimiento recursivo.

```
Proc bt(c)
  si reject(P,c) entonces return
  si accept(P,c) entonces output(P,c)
  s ← first(P,c)
  mientras s ≠ Λ hacer
    bt(s)
    s ← next(P,s)
```

## Consideraciones de uso

El procedimiento reject debe ser una función de valor booleano que devuelve verdadero sólo si es cierto que ninguna extensión posible de c es una solución válida para P. Si el procedimiento no puede encontrar una solución, debe retornar false.

El procedimiento accept debe returnar true si c es una solución válida y completa para el problema P, y falso lo contrario.