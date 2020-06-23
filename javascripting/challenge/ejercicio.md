Día 1: No hay tiempo para un taxi
Ejercicio traducido de Advent of Code 2016 Day 1: No Time for a Taxicab

El trineo de Santa usa un reloj de alta precisión para guiar sus movimientos, y el oscilador del reloj lo regulan las estrellas. Desgraciadamente, las estrellas han sid robadas... por el Conejo de Pascua. Para salvar la navidad, Santa necesita que recuperes las cincuenta estrellas antes del 25 de diciembre.

Recupera estrellas solucionando problemas. Dos ejercicios se publicarán cada dįa del calendario de adviento; el segundo ejercicio del día lo puedes ver una vez que hayas completado el primero. Cada ejercicio te da una estrella. Buena suerte!

Te acaban de tirar en paracaidas en una ciudad cerca de la Ofina Central del Conejo de Pascua. "Cerca", desgraciadamente, es lo más cerca que te pueden dejar - las instrucciones en el documento de reclutamiento del Conejo de Pascua interceptado por los Elfos comienzan acá, y nadia ha tenido tiempo de averiguar como seguir desde este punto.

El documento indica que debes comenzar en las coordenadas donde te dejaron, apuntando al norte. Depués debes seguir la secuencia provista: volteamos a la izquierda (L) o a la derecha (R) 90 grados, y caminamos el número de cuadras, terminando en una nueva intersección.

No hay tiempo para seguir tan ridículas instrucciones a pie, así que te tomas un momento para averiguar el destino. Dado que solo puedes caminar en la grilla de calles de la ciudad, cuál es el camino más corto para llegar al destino?

Por ejemplo:

Siguiendo R2, L3 te deja 2 cuadras al este y 3 al norte, o a 5 cuadras de distancia.
R2, R2, R2 te deja 2 cuadras al sur de donde comenzaste, a una distancia de 2 cuadras.
R5, L5, R5, R3 te deja a 12 cuadras de distancia.
A cuántas cuadras queda la Oficina Central del Conejo de Pascua?

Input: R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1
