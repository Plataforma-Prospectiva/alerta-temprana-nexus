# 📘 Manual de Usuario e Instalación del Sistema de Alerta Temprana Elena

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
- PostgreSQL o MongoDB como base de datos (según configuración del backend)

---

## ⚙️ Instalación (Entorno de Desarrollo)

1. **Clonar el repositorio del frontend**

```bash
git clone https://github.com/nexus-alerta-temprana/frontend.git
cd frontend
