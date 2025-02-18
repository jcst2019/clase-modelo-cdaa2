# clase-modelo-cdaa2
Clase Modelo del Curso de Desarrollo Avanzado de Aplicaciones 2

# Paso 1: Crear el Proyecto Angular
ng new modular-app --routing
cd modular-app
ng serve

# Paso 2.1: Crear el Shared Module
ng generate module shared
ng generate component shared/custom-button

# Paso 2.2: Crear el Core Module
ng generate module core
ng generate service core/auth

# Paso 3: Crear Feature Modules con Routing
ng generate module features/products --route products --module app.module
ng generate module features/users --route users --module app.module

# Paso 6: Ejecutar la Aplicación
ng serve

