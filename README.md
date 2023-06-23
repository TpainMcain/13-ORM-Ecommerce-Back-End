# 13-ORM-Ecommerce-Back-End
![MIT License](https://img.shields.io/badge/license-MIT-important)

## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Instructions](#usage-instructions)
  - [License Section](#license)
  - [Credits](#credits)
  - [Contact Me](#contact-me)
  
## Description
This is a back-end application for an e-commerce website. It is designed to provide a robust and flexible back-end structure, allowing a hypothetical e-commerce company to compete with other firms in the industry effectively. The system is constructed using Node.js, powered by an Express.js API, and interacts with a MySQL database via Sequelize, an Object-Relational Mapping (ORM) tool.

## Installation Instructions
1. Clone the repository to your local development environment.
    * ```git clone https://github.com/TpainMcain/13-ORM-Ecommerce-Back-End.git```
2. Navigate to the ```13-ORM-Ecommerce-Back-End``` folder using the command prompt.
3. Run ```npm i -y``` to install all dependencies.
4. Rename the ```.env.example``` file in the project's root directory to ```.env```
5. Open the ```.env``` file and provide the necessary values for the environment variables.
    * Note: The ```.env.example``` file serves as a template for the required environment variables. Replace the placeholder values with the actual values relevant to your MySQL.
6. Save the changes to the ```.env``` file.

## Usage Instructions
* Make sure MySQL server is running on your machine. Ensure Insomina is installed on your machine.
*  Log in to MySQL ```mysql -u root -p```, enter your password and type ```source db/schema.sql``` to create the database.
*   Type ```quit``` to back out of MySQL.
*   Type ```npm run seed``` to populate the database.
*   Type ```npm start``` to start the server.
*   Follow along with the video walkthrough to GET, POST, PUT & DEL from the database using Insomnia.

### Video Walkthrough
https://drive.google.com/file/d/19st63tE5RjsF557v7ErqRxgO645mdwgL/view

## License
Permission to use this application is granted under the MIT license.
Click on the link for more information: [MIT License Information](https://opensource.org/licenses/MIT)

## Contact Me
GitHub Link: (https://github.com/TpainMcain)<br>
Email Address: <Trevorwp77@gmail.com>
