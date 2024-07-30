# ProyectoFinal

# Sistema de Gestión de Cajeros

Este proyecto es un sistema de gestión de cajeros automáticos desarrollado utilizando el stack MEAN (MongoDB, Express.js, Angular, Node.js). Permite a los usuarios realizar operaciones bancarias básicas como consultar su saldo, realizar retiros y depósitos, y generar reportes de transacciones.

# Requerimientos del Sistema de Gestión de Cajeros

# Requisitos de Software para el Sistema de Gestión de Cajeros

## Prerrequisitos

Asegúrate de tener instalados los siguientes programas y herramientas en tu sistema:

1. **Node.js**
2. **MongoDB**
3. **Angular CLI**
4. **Git**

### Instalación de Node.js

Node.js es necesario para ejecutar el servidor de backend y administrar las dependencias del proyecto.

- Descarga e instala Node.js desde [Node.js official site](https://nodejs.org/).
- Verifica la instalación ejecutando:
    ```sh
    node -v
    npm -v
    ```

### Instalación de MongoDB

MongoDB es la base de datos utilizada por el proyecto.

- Descarga e instala MongoDB desde [MongoDB official site](https://www.mongodb.com/try/download/community).
- Sigue las instrucciones de instalación para tu sistema operativo.
- Inicia el servicio de MongoDB:
    ```sh
    mongod
    ```

### Instalación de Angular CLI

Angular CLI es necesario para gestionar y construir el frontend del proyecto.

- Instala Angular CLI globalmente usando npm:
    ```sh
    npm install -g @angular/cli
    ```
- Verifica la instalación ejecutando:
    ```sh
    ng --version
    ```

### Instalación de Git

Git es necesario para clonar el repositorio del proyecto.

- Descarga e instala Git desde [Git official site](https://git-scm.com/).
- Verifica la instalación ejecutando:
    ```sh
    git --version
    ```

## Clonando el Repositorio

1. Clona el repositorio del proyecto desde GitHub:
    ```sh
    git clone https://github.com/tu-usuario/ProyectoFinal.git
    cd Gestion-de-Cajeros
    ```

## Instalación de Dependencias

### Dependencias del Servidor (Node.js con Express.js)

1. Navega al directorio del servidor:
    ```sh
    cd server
    ```
2. Instala las dependencias necesarias:
    ```sh
    npm install
    ```

### Dependencias del Cliente (Angular)

1. Navega al directorio del cliente:
    ```sh
    cd ../client
    ```
2. Instala las dependencias necesarias:
    ```sh
    npm install
    ```

## Iniciando la Aplicación

### Iniciar el Servidor

1. Navega al directorio del servidor:
    ```sh
    cd server
    ```
2. Inicia el servidor:
    ```sh
    npm start
    ```

### Iniciar el Cliente

1. Navega al directorio del cliente:
    ```sh
    cd ../client
    ```
2. Inicia la aplicación Angular:
    ```sh
    npm start
    ```

3. Abre [http://localhost:4200](http://localhost:4200) en tu navegador para ver la aplicación en acción.

## Despliegue

Para desplegar la aplicación en un entorno de producción, sigue las instrucciones específicas para el despliegue de Node.js y Angular en tu servidor de producción.

### Construir para Producción

#### Servidor

1. Navega al directorio del servidor:
    ```sh
    cd server
    ```
2. Construye el servidor:
    ```sh
    npm run build
    ```

#### Cliente

1. Navega al directorio del cliente:
    ```sh
    cd ../client
    ```
2. Construye la aplicación Angular para producción:
    ```sh
    ng build --prod
    ```

## Soporte y Contribuciones

Si necesitas ayuda o quieres contribuir al proyecto, revisa el archivo `CONTRIBUTING.md` para más detalles.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.


# Diseño del Sistema de Gestión de Cajeros

## Descripción de Componentes

- **Componente de Autenticación**: Responsable de manejar el inicio de sesión de los usuarios.
- **Componente de Transacciones**: Responsable de manejar las operaciones de retiro, depósito y consulta de saldo.
- **Componente de Reportes**: Responsable de generar reportes de transacciones.


# Tareas del Proyecto de Gestión de Cajeros

- [ ] Crear el sistema de autenticación de usuarios.
- [ ] Implementar la funcionalidad de consulta de saldo.
- [ ] Implementar la funcionalidad de retiro de efectivo.
- [ ] Implementar la funcionalidad de depósito de efectivo.
- [ ] Desarrollar el módulo de generación de reportes.
- [ ] Realizar pruebas unitarias y de integración.
- [ ] Documentar el código fuente.
- [ ] Desplegar el sistema en el servidor.

