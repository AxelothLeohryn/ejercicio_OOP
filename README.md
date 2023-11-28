### Ejercicio POO 1
- Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
- Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
- Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
- Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

### Ejercicio POO 2
1. Construye las siguientes clases:

    **Warrior**:

    `constructor(life, power)`: Establece el valor de las propiedades _life_ y _power_

    `attack`: Devuelve el valor de _power_ del guerrero

    `defend(damage)`: resta el valor del parámetro recibido _damage_ al valor de la propiedad _life_. Después, imprime el valor de la vida restante.

    **Maya: extiende de la clase Warrior**

    `constructor`: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

    `drinkColaCao`: Suma 10 al poder.

    **Aztec: extiende de la clase Warrior**

    `constructor`: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

    `drinkNesquik`: Suma 10 a la vida.

3. Realiza la siguiente cadena de intercambio de golpes.

    - Azteca bebe nesquik

    - Maya bebe Cola Cao

    - Maya ataca a azteca. Azteca defiende.

    - Azteca ataca a maya. Maya defiende.


  ### Ejercicio POO 3
  Existen 2 clases y varios "arrays": Gallery, Painter y 4 "arrays" con rutas a archivos de imágenes, divididos por tipo de vehículo y uso.

1. **Gallery**: Su única funcionalidad es albergar imágenes y devolverlas dependiendo del método que utilicemos. No interactúa con HTML.

   - `constructor`: Acepta dos parámetros, ambos conjuntos de imágenes.

   - `getRandomCivil`: devuelve un vehículo aleatorio civil de la galería.

   - `getRandomMilitary`: devuelve un vehículo aleatorio militar de la galería.

   - `getAll`: devuelve el conjunto de vehículos de la galería, tanto militares como civiles.

2. **Painter**: La clase encargada de pintar las imágenes, de interactuar con el DOM. Encargada de crear etiquetas y manipular el DOM para agregarlas.

    - `constructor`: Ejecutará la función `createGallery`.

    - `createGallery`:

        - Creará un elemento `section` y lo agregará al body.

        - Dicho `section` será, también, una propiedad de Painter a la que llamaremos `gallery`.

    - `createImageTag`: Acepta la url de una imagen y devuelve los siguientes elementos:

        ```javascript
        <picture>
            <img src="ThisIsAnImage.jpg" />
        </picture>
        ```

    - `paintSingleImage`: Acepta la url de una imagen y agrega a `gallery` el elemento creado por `createImageTag`.

    - `paintMultipleImages`: Acepta un conjunto de imágenes y agrega a `gallery`, uno a uno, el elemento creado por `createImageTag`.
