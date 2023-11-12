# Acerca del proyecto Casa Soñada - backend

Esta es la parte backend del proyecto Casa Soñada.

## Tecnologías usadas en el proyecto

- [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download): Herramienta para trabajar con .NET Framework.
- [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0): Framework para crear aplicaciones conectadas a internet.
- [C#](https://learn.microsoft.com/en-us/dotnet/csharp/): Lenguaje de programación moderno, basado en objetos y con seguridad de tipos.
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/): ORM para trabajar bases de datos usando objetos .NET.
- [JWT](https://jwt.io/): Objeto JavaScript para transmitir información de forma segura.
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/): IDE para el desarrollo de aplicaciones.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código.

---

## Cómo instalar el proyecto

### Con Visual Studio 2022

1. Instalar [Visual Studio 2022](https://visualstudio.microsoft.com/vs/).
2. Asegurar de tener instalada la paquetería **Desarrollo de ASP.NET y web** desde el **Visual Studio Installer**. Para esto, abrir **Visual Studio Installer**, en la pestaña **Instalados**, dar clic en el botón **Modificar** en la versión **Visual Studio 2022**.
3. Abrir el archivo [./backend/DreamedHouse.sln] ubicado en la raíz del proyecto backend.

### Con Visual Studio Code

1. Instalar [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download).
2. Instalar [Visual Studio Code](https://code.visualstudio.com/).
3. Instalar la extensión [C#](https://learn.microsoft.com/en-us/dotnet/csharp/) desde el apartado de **Extensiones** en [Visual Studio Code](https://code.visualstudio.com/).
4. Esperar la notificación en Visual Studio Code indicando si se desea agregar los assets y presionar en Yes (Sí).

---

## Cómo ejecutar el proyecto

### Con Visual Studio 2022

1. Abrir el proyecto desde [Visual Studio 2022](https://visualstudio.microsoft.com/vs/).
2. Clic en la flecha hacia abajo en el botón de ejecutar y cambiar el modo de **HTTPS** a **HTTP**.
3. Presionar `F5` para que se ejecute (o `Ctrl` + `F5` para ejecutarlo sin el debugger).
4. Se abrirá el navegador predeterminado con la ejecuión del proyecto.

### Con Visual Studio Code

1. Abrir el proyecto con [Visual Studio Code](https://code.visualstudio.com/).
2. Presionar `Ctrl` + `F5` para la ejecución del proyecto.
3. Se abrirá el navegador con una página que no carga, para arreglar esto, ir a la barra de direcciones del navegador y al final del link agregar `/swagger` para que pueda cargar el proyecto.

### Desde la CMD, terminal o PowerShell

**Nota:** Para esto, se deberá tener instalado el [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download).

1. Abrir la CMD, terminal o PowerShell en la ruta [./backend/DreamedHouse/].
2. Ejecutar

```shell
dotnet run
```

---

### Nota

Si se usa una base de datos de forma local, se deberán cambiar los datos del **DefaultConnection** en el **ConnectionString** en el archivo [appsettings.json] situado en la raíz del proyecto backend.
