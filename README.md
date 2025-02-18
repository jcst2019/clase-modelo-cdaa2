# clase-modelo-cdaa2
Clase Modelo del Curso de Desarrollo Avanzado de Aplicaciones 2

# Modular Angular App

Este proyecto es una aplicación modular desarrollada con Angular. Se utiliza el enfoque de *Lazy Loading* para cargar módulos de forma eficiente y se organiza en módulos funcionales como `core`, `shared`, y `feature`. Cada módulo tiene su propia funcionalidad y puede ser reutilizado en varias partes de la aplicación.

## Estructura del Proyecto

La estructura del proyecto sigue una organización modular que facilita el mantenimiento y escalabilidad de la aplicación:
```sh
modular-app/
├── e2e/                           # Archivos para pruebas de extremo a extremo
├── node_modules/                  # Dependencias del proyecto
├── src/
│   ├── app/
│   │   ├── core/                  # Módulo Core con lógica de negocio compartida (autenticación, etc.)
│   │   │   ├── auth.service.ts    # Servicio de autenticación
│   │   │   ├── core.module.ts     # Módulo Core
│   │   ├── shared/                # Módulo Shared con componentes reutilizables
│   │   │   ├── custom-button/     # Componente de botón personalizado
│   │   │   │   ├── custom-button.component.ts
│   │   │   │   ├── custom-button.component.html
│   │   │   │   ├── custom-button.component.css
│   │   │   ├── shared.module.ts   # Módulo Shared
│   │   ├── features/              # Módulos de funcionalidades
│   │   │   ├── products/          # Módulo de Productos
│   │   │   │   ├── product-list/  # Componente de la lista de productos
│   │   │   │   ├── products.module.ts
│   │   │   ├── users/             # Módulo de Usuarios
│   │   │   │   ├── user-list/     # Componente de la lista de usuarios
│   │   │   │   ├── users.module.ts
│   │   ├── app-routing.module.ts  # Configuración de rutas
│   │   ├── app.component.ts       # Componente raíz de la aplicación
│   │   ├── app.component.html     # HTML del componente raíz
│   │   ├── app.module.ts          # Módulo principal de la aplicación
├── angular.json                   # Configuración del proyecto Angular
├── package.json                   # Dependencias del proyecto
└── tsconfig.json                  # Configuración de TypeScript

```


# Instrucciones para Crear el Proyecto Angular

Sigue estos pasos para crear el proyecto Angular y estructurarlo adecuadamente.

## Paso 1: Crear el Proyecto Angular

Ejecuta el siguiente comando para crear el proyecto con soporte para rutas:

```bash
ng new modular-app --routing --no-standalone
cd modular-app
ng serve
```

- **`ng new modular-app --routing --no-standalone`**: Crea un nuevo proyecto Angular llamado `modular-app` con enrutamiento habilitado y sin usar componentes standalone.
- **`cd modular-app`**: Accede al directorio del proyecto.
- **`ng serve`**: Levanta el servidor de desarrollo en `http://localhost:4200`.

## Paso 2: Crear el Shared Module y su Componente

Crea el módulo `shared` y el componente `custom-button`:

```bash
ng generate module shared
ng generate component shared/custom-button
```

- **`ng generate module shared`**: Crea el módulo `shared`.
- **`ng generate component shared/custom-button`**: Crea el componente `custom-button` dentro del módulo `shared`.

## Paso 3: Crear el Core Module y su Servicio

Genera el módulo `core` y un servicio `auth` dentro de este:

```bash
ng generate module core
ng generate service core/auth
```

- **`ng generate module core`**: Crea el módulo `core`.
- **`ng generate service core/auth`**: Crea el servicio `auth` dentro del módulo `core`.

## Paso 4: Crear Feature Modules con Routing

Crea los módulos de características `products` y `users` con configuración de lazy loading:

```bash
ng generate module features/products --route products --module app.module
ng generate module features/users --route users --module app.module
```

- **`ng generate module features/products --route products --module app.module`**: Crea el módulo `products` con soporte para rutas y carga perezosa (lazy loading).
- **`ng generate module features/users --route users --module app.module`**: Crea el módulo `users` con soporte para rutas y carga perezosa (lazy loading).

## Paso 5: Ejecutar la Aplicación

Finalmente, ejecuta el servidor de desarrollo nuevamente para ver la aplicación en el navegador:

```bash
ng serve
```

Este comando levantará el servidor de desarrollo y podrás ver tu aplicación en `http://localhost:4200`.
