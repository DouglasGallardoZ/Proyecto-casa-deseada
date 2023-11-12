# Acerca del proyecto Casa Soñada - database

Estos son los scripts de la base de datos del proyecto Casa Soñada.

---

## Tecnologias usadas en el proyecto frontend

- [MySQL](https://dev.mysql.com/downloads/mysql/): DBMS para bases de datos relacionales.

---

## Cómo instalar el proyecto

En caso de querer instalar una base de datos de forma local, hacer lo siguiente:

1. Instalar [MySQL](https://dev.mysql.com/downloads/mysql/).
2. Instalar un entorno gráfico de preferencia para trabajar con [MySQL](https://dev.mysql.com/downloads/mysql/), como lo sería [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) o [Dbeaver](https://dbeaver.io/download/).
3. Ejecutar los **scripts** en el siguiente orden:
   1. Ejecutar primero el script [./database/scripts/schema.sql]
   2. Ejecutar el script [./database/scripts/houses_table.sql] y luego [./database/scripts/house_images.sql]
   3. El script [./database/scripts/proformas_table.sql] ejecutarlo después de haber ejecutado TODOS los scripts finalizados en `_table.sql`.
   4. Después ejecutar los scripts finalizados en `_insert,sql` para cargar los datos necesarios en las tablas correspondientes.
