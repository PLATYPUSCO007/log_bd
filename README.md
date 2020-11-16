# LOG EN BASE DE DATOS MONGO

Aplicación en NodeJS, Express y Mongoose, que registra las acciones que realiza el usuario logueado sobre la aplicación, como eliminar, crear o actualizar un registro.

## Uso

Se usa el siguiente comando [npm run dev](https://pip.pypa.io/en/stable/) para inicializar la aplicacion.

```bash
npm run dev
```

## Puntos finales

### Usuario: 
- [Crear:](http://localhost:3000/v1/users/create) crear un usuario (POST).

```json
{
  "username": "tuUser",
  "password": "tuPassword" 
}
```
- [login:](http://localhost:3000/v1/users/login) iniciar sesión (POST).

```json
{
  "username": "tuUser",
  "password": "tuPassword" 
}
```

- [logout:](http://localhost:3000/v1/users/logout) cerrar sesión (POST).


### Marca: 
- [Crear:](http://localhost:3000/v1/marcas/create) crear una marca (POST).

```json
{
  "name": "tuMarca",
}
```
- [Actualizar:](http://localhost:3000/v1/marcas/update/IDtuMarca) crear una marca (POST).

```json
{
  "name": "tuMarca",
}
```

## Proyecto de Administracion de BD 30102 - CUN
Proyecto final, William Ricardo Enciso Bautista

## License
[MIT](https://choosealicense.com/licenses/mit/)
