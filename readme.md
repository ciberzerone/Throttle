🦋 Test Throttle
⚡ Inicie proyecto Node.js con Typecript utilizando prácticas de desarrollo basado en pruebas (TDD).
hacer la prueba de debounce  para evitar la ejecución excesiva de funciones en respuesta a eventos que se producen con frecuencia, como la actualización del estado en un componente.

📥 Instalación
Para comenzar con esta plantilla, primero necesitas clonar el repositorio:

npm install
🏁 Cómo empezar

git clone https://github.com/ciberzerone/Throttle.git
Luego, instale las dependencias del proyecto:
npm install
npm start
npm run build
npm test


🏗️ Guiones
los siguientes procesos
npm install typescript --save-dev (instala typescript  -- con dependencia package.json )
npx tsc --init  (inicializar el proyecto en typescript - crea un archivo tsconfig.json e)
npm install jest ts-jest @types/jest --save-dev (instala jest ts  y configura package.json)
instalar el paquete commander 
configurar tsconfig.jason {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    },
  "include": [
    "./src/**/*",
    "./tests/**/*"
  ],

  "exclude": [
    "node_modules",
    "tests", 
    "**/*.test.ts",
    "**/*.spec.ts"
    // Puedes excluir otros directorios o archivos que no necesiten compilación
  ]
ts-jest

npm test

📝 Dependencias


🛠️ Dependencias de desarrollo
Lista de las principales dependencias de desarrollo:

typescript: Superset de JavaScript que añade tipos estáticos.
jest: Marco de pruebas para JavaScript.

🗂️ Estructura de carpetas
En esta estructura de carpetas, el código está organizado según los principios de la Arquitectura Hexagonal.

Throttle/
├── src
│   ├── Throttle.ts
│   └── index.ts
├── publc_html
│   ├── index.html
│   └── css/
│   │     └──styles.css
│   └──js
│      ├── Throttle.js
│      └── index.js
├── test
│   └── debounce.test.ts
├── .gitignore
├── jest.config.js
├── package-lock.json
├── package.json
├── readme.md
└── tsconfig.json

