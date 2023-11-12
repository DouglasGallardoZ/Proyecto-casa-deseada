![Casa Soñada Logo](https://res.cloudinary.com/dnxfbzfoz/image/upload/v1675233141/dreamed-house/logo_yx6nb0.svg)

# Acerca del proyecto Casa Soñada - database

Estos son los scripts de la base de datos del proyecto Casa Soñada.

---

## Tecnologias usadas en el proyecto frontend

- [Clever Cloud](https://www.clever-cloud.com/): Herramienta PaaS usado en este proyecto para el hosting de la base de datos.
- [MySQL](https://dev.mysql.com/downloads/mysql/): DBMS para bases de datos relacionales.

---

## Cómo instalar el proyecto

La base de datos está alojada en la nube, por lo que no se necesita crear una de forma local.

En caso de querer instalar una base de datos de forma local, hacer lo siguiente:

1. Instalar [MySQL](https://dev.mysql.com/downloads/mysql/).
2. Instalar un entorno gráfico de preferencia para trabajar con [MySQL](https://dev.mysql.com/downloads/mysql/), como lo sería [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).
3. Ejecutar los **scripts** en el siguiente orden:
   1. Ejecutar primero el script [./database/scripts/schema.sql](https://github.com/joshcast777/dreamed-house-project/blob/main/database/scripts/schema.sql).
   2. Ejecutar el script [./database/scripts/houses_table.sql](https://github.com/joshcast777/dreamed-house-project/blob/main/database/scripts/houses_table.sql) y luego [./database/scripts/house_images.sql](https://github.com/joshcast777/dreamed-house-project/blob/main/database/scripts/house_images_table.sql).
   3. El script [./database/scripts/proformas_table.sql](https://github.com/joshcast777/dreamed-house-project/blob/main/database/scripts/proformas_table.sql) ejecutarlo después de haber ejecutado TODOS los scripts finalizados en `_table.sql`.
   4. Después ejecutar los scripts finalizados en `_insert,sql` para cargar los datos necesarios en las tablas correspondientes.
