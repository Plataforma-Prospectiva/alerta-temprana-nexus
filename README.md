# 📘 Manual de Usuario e Instalación del Sistema de Alerta Temprana NEXUS

> **URL de acceso público**: [https://alerta-temprana-nexus.lovable.app](https://alerta-temprana-nexus.lovable.app)  
> **Versión**: 1.0  
> **Última actualización**: junio 2025  
> **Autor**: Equipo NEXUS  

---

## Índice

1. [Descripción General](#descripción-general)  
2. [Requisitos del Sistema](#requisitos-del-sistema)  
3. [Instalación (Entorno de Desarrollo)](#instalación-entorno-de-desarrollo)  
4. [Estructura del Proyecto](#estructura-del-proyecto)  
5. [Uso del Sistema Web](#uso-del-sistema-web)  
6. [Gestión de Alertas](#gestión-de-alertas)  
7. [Usuarios y Roles](#usuarios-y-roles)  
8. [Exportación de Datos](#exportación-de-datos)  
9. [Mantenimiento y Actualizaciones](#mantenimiento-y-actualizaciones)  
10. [Soporte Técnico](#soporte-técnico)

---

## 📌 Descripción General

El Sistema de Alerta Temprana NEXUS es una plataforma web diseñada para el **monitoreo georreferenciado de eventos críticos** relacionados con riesgos territoriales. Tiene como finalidad entregar información oportuna y organizada para la toma de decisiones en planificación territorial, gobernanza ambiental o respuesta temprana a emergencias.

---

## 💻 Requisitos del Sistema

### Cliente (usuario final)

- Navegador recomendado: Google Chrome (última versión)  
- Compatibilidad: Firefox, Edge  
- Resolución mínima de pantalla: 1366x768

### Entorno de desarrollo (opcional)

- Node.js ≥ 18.x  
- npm ≥ 9.x (o yarn)  
- Docker ≥ 20.x (opcional)

---

## ⚙️ Instalación (Entorno de Desarrollo)

1. **Clonar el repositorio del frontend**

```bash
git clone https://github.com/Plataforma-Prospectiva/alerta-temprana-nexus.git
cd alerta-temprana-nexus
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Levantar servidor de desarrollo**

```bash
npm run dev
```

4. **Construir para producción**

```bash
npm run build
npm run preview
```

---

## 📂 Estructura del Proyecto

```text
├── public/              # Archivos estáticos (favicon, robots.txt, etc.)
├── src/                 # Código fuente de React + Vite
│   ├── components/      # Componentes UI y genéricos
│   ├── hooks/           # Hooks personalizados
│   ├── pages/           # Vistas y rutas de la aplicación
│   ├── App.tsx          # Configuración de rutas y proveedor de datos
│   ├── main.tsx         # Punto de entrada de Vite
│   └── index.css        # Estilos globales
├── index.html           # Template principal
├── package.json         # Dependencias y scripts
└── README.md            # Documentación del proyecto
```

---

## 🖥️ Uso del Sistema Web

1. Abrir en el navegador: `http://localhost:5173` (u otro puerto que indique Vite).  
2. Navegar por las secciones del menú: Panel de Control, Alertas, Territorios, Fuentes de Datos, Indicadores, Mapa, Reportes, Configuración.

---

## 🛠️ Gestión de Alertas

Consulte la sección **Alertas** para crear, filtrar, ver detalles y editar alertas de conflicto social.

---

## 👥 Usuarios y Roles

En **Configuración**, gestione usuarios, permisos y notificaciones del sistema.

---

## 📤 Exportación de Datos

Desde **Mapa** o **Reportes**, utilice los botones de exportación o generación de reportes en PDF/CSV.

---

## 🔄 Mantenimiento y Actualizaciones

- Para actualizar dependencias: `npm update`  
- Para migrar datos o realizar backups, consulte la sección **Acciones del Sistema** en Configuración.

---

## 🆘 Soporte Técnico

Para consultas o incidencias, comuníquese con el equipo de soporte en `soporte@nexus-alerta.cl`.
