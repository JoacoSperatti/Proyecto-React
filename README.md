# PowerFit | E-commerce de Suplementos Deportivos

¡Bienvenido a **PowerFit**! 💪
Este proyecto es una Single Page Application (SPA) de e-commerce desarrollada con **React JS**. La aplicación permite a los usuarios navegar por un catálogo de suplementos, filtrar por categorías, ver detalles de productos, gestionar un carrito de compras y finalizar pedidos generando órdenes reales en **Firebase Firestore**.

## 🚀 Características Principales

- **Navegación Fluida:** Utilizando `react-router-dom` para una experiencia de usuario sin recargas.
- **Catálogo Dinámico:** Los productos se cargan directamente desde una base de datos en la nube (Firestore).
- **Detalle de Producto:** Vista ampliada con descripción, precio y selector de cantidad.
- **Carrito de Compras Avanzado:**
  - Agregar productos con control de stock.
  - **Edición de cantidades:** Botones (+ / -) para modificar unidades directamente en el carrito.
  - Eliminar ítems individuales.
  - **Alertas de Confirmación:** Integración con `SweetAlert2` para confirmar antes de vaciar el carrito.
  - Cálculo automático de totales.
- **Diseño Responsive:**
  - Menú "Hamburguesa" desplegable para dispositivos móviles.
  - Interfaz adaptada a todas las pantallas.
- **Checkout:** Formulario de finalización de compra con validación de datos y generación de ID de orden.
- **Feedback Visual:** Notificaciones toast (`react-toastify`) al agregar productos y loaders de carga.

## 🛠️ Tecnologías Utilizadas

* **React JS** (Vite) - Librería principal para la UI.
* **Firebase / Firestore** - Base de datos NoSQL para productos y órdenes.
* **React Router Dom** - Manejo de rutas y navegación.
* **React Toastify** - Notificaciones visuales tipo "Toast".
* **SweetAlert2** - Alertas modales personalizadas y elegantes.
* **CSS3** - Estilos personalizados, diseño Flexbox y Responsive.

## 📝 Autor

**Joaquín Speratti**
Desarrollado como Proyecto Final para el curso de React JS.