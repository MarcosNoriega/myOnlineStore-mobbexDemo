# My Online Store (Mobbex Demo)

Este proyecto en un micro sistema de pedidos con pago online utilizando los servicios de mobbex como demostración. El mismo se divide en dos subprojetos, backend y frontend.

El backend esta desarrollado con el lenguaje typescript, utilizando el framework express y enfocado en una arquitectura por capas.

El frontend se encuentra desarrollado por el framework angular.

## Comenzando 🚀

_Estas instrucciones te permitirán levantar proyecto en funcionamiento en tu máquina local para propósitos de pruebas._

### Pre-requisitos 📋

Previamente se deberá instalar Node, MongoDB, Typescript y ng CLI

para instalar typescript:
```
npm i -g typescript
```
para instalar ng CLI
```
npm install -g @angular/cli
```

### Instalación 🔧

Para instalar el proyecto se deberá instalar las dependencias de cada subproyecto, tanto para el backend como para el frontend

```
npm install
```
a continuación se debera configurar las variables de entorno de desarrollo, creando un archivo ```.env``` y setearlas siguiendo el siguente ejemplo. 

```
URL_CHECKOUT=myUrlCheckout
X_API_KEY=myXApiKey
X_ACCESS_TOKEN=myXAccessToken
URL_PAY_ORDER=
URL_DATABASE=mongodb://localhost
PORT_DATABASE=27017
DB_NAME=myOnlineStore
DATABASE=Mongo
RETURN_URL=http://localhost:3000/return_url
WEBHOOK=http://localhost:3000/webhook
```
Para obtener el valor de ```X_API_KEY``` y ```X_ACCESS_TOKEN``` se debera leer la siguente documentacion de mobbex.
https://mobbex.dev/

Cabe aclarar que las variables entorno ```RETURN_URL``` y ```WEBHOOK``` son las rutas en la cual mobbex va a comunicarse con esta Api.

```RETURN_URL```: Es la ruta en la cual mobbex va a retornar una vez al finalizar el pago.

```WEBHOOK```: Es la ruta en la cual mobbex va a enviar la informacion sobre el pago.

Además en el ejemplo se esta apuntando a localhost pero para poder probar en local deberemos utilizar una herramienta llamada ngrok o TunnelTo, la cual nos permiten exponer en internet una URL local. 

En mi caso use ngrok y se podran registrar con el siguiente link 

https://ngrok.com/

Por limitaciones de ngrok, en la Api de backend esta configurada una endpoint que permite retornar el pago y simplemente envia un mesaje de finalizacion del mismo, pero la idea es retornar hacia el frontend.


Por otro lado se debera configurando el archivo ```environment.ts``` de la siguente manera.

```typescript
export const environment = {
  production: false,
  urlMyOnlineStore: ''
  currency: 'ARS',
  customer: {
    email: 'demo@mobbex.com',
    name: 'Cliente Demo',
    identification: '12123123'
  }
};
```

_Y luego para levantar en local cada cada uno de los subprojectos con el siguiente comando_

```
npm start
```
_Para el backend tambien se encuentra disponible el siguiente comando para levantar en local por medio de nodemon pero se debera instalar las dependencias de desarrollo_

```
npm install -D
npm run dev
```

_Pera obtener datos de productos se puede ejecutar desde postman el siguente peticion_

http://localhost:3000/products

el cual se debera pasar por body los productos a guardar en la base de datos.
Aqui dejo un ejemplo

```json
[
	{
		"name": "cursus",
		"description": "Suspendisse aliquet, sem ut",
		"price": 2709
	},
	{
		"name": "varius",
		"description": "ullamcorper eu, euismod ac, fermentum vel, mauris. Integer",
		"price": 5533
	},
	{
		"name": "blandit",
		"description": "pede. Suspendisse dui. Fusce diam nunc, ullamcorper",
		"price": 1011
	},
	{
		"name": "faucibus id,",
		"description": "magna. Lorem ipsum",
		"price": 4489
	},
	{
		"name": "eget varius",
		"description": "Praesent eu dui. Cum",
		"price": 3342
	},
	{
		"name": "aliquet",
		"description": "Morbi metus. Vivamus euismod urna. Nullam",
		"price": 6396
	},
	{
		"name": "mattis semper,",
		"description": "lacus. Quisque",
		"price": 1324
	},
	{
		"name": "hendrerit",
		"description": "Aenean massa. Integer vitae nibh. Donec est mauris,",
		"price": 2325
	},
	{
		"name": "dolor sit amet,",
		"description": "dictum eu, placerat eget, venenatis a, magna. Lorem",
		"price": 1070
	},
	{
		"name": "Duis volutpat nunc",
		"description": "amet massa. Quisque porttitor eros nec tellus.",
		"price": 2319
	}
]
```


## Ejecutando las pruebas unitarias ⚙️

_La parte de backend cuenta con un suit de pruebas unitarias y pueden ser ejecutadas mediante el siguiente comando_

```
npm run test
```

