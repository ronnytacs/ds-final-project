CREATE DATABASE finalProject;

USE finalProject;

CREATE TABLE person(
  personID INTEGER NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip VARCHAR(10) NOT NULL,
  workPhone VARCHAR(10),
  mobilePhone VARCHAR(10),
  homePhone VARCHAR(10),
  dateOfBirth DATE NOT NULL,
  gender VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  radioNumber VARCHAR(255) NOT NULL,
  stationNumber INTEGER NOT NULL,
  isActive BOOL NOT NULL,
  email VARCHAR(255) NOT NULL,
  startDate DATE NOT NULL,
  department VARCHAR(255) NOT NULL,
  PRIMARY KEY (personID)
);

INSERT INTO person(firstName, lastName, address, city, state, zip, workPhone, mobilePhone, homePhone, dateOfBirth, gender, position, radioNumber, stationNumber, isActive, email, startDate, department) VALUES
("Kathryn", "Pryde", "1123 Xavier School Drive", "Watkinsville",  "GA", "30677", "7075551234", "7075552345", "", "1967-11-03", "Female", "Chief", "A-1", "9999", 1, "kathryn.pryde@gmail.com", "2008-01-03", "ALL"),
("Piotr",  "Rasputin", "A31 Mother Russia Road", "Seattle", "WA", "98133", "", "2065559876","", "1977-08-09", "Male", "Fire Chief", "841", "8", 1,"piotr.rasputin@gmail.com", "2009-01-09", "Fire Suppression"),
("Warren",  "Worthington III", "1140 Experiment Station Rd", "Watkinsville", "GA", "30677", "7065553945", "", "", "1988-07-09", "Male", "Fire Equipment Operator", "122", "1", 1, "warren.worthington@gmail.com","2009-02-09","Fire Suppression");
/* Position: Probationary firefighter, Firefighter, Driver engineer (DE), or fire equipment operator (FEO), Lieutenant, Captain, Battalion chief, Assistant chief, Fire chief.*/
/* Fire department: fire suppression, emergency medical response, hazardous materials response, fire prevention, and education. */


CREATE TABLE userLogin(
  userID INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (userID)
);

CREATE TABLE certification(
  certID INTEGER NOT NULL AUTO_INCREMENT,
  certName VARCHAR(255) NOT NULL,
  certAgency VARCHAR(255) NOT NULL,
  standardExpiry INTEGER,
  PRIMARY KEY (certID)
);

INSERT INTO certification(certName, certAgency, standardExpiry) VALUES
("CPR", "CPR for Healthcare Providers/American Heart Association", 2),
("CPR", "CPR for the Professional Rescuer/American Red Cross", 2),
("Firefighter I ", "Athens Technical College", 3),
("Firefighter II", "Ivy Technical College", 3),
("POST", "Georgia POST Academy", 5),
("HAZMAT", "U.S. Department of Transportation", 3),
("Extrication", "Department of Homeland Security", 9999),
("EMT-Adv", "National Registry of Emergency Medical Technicians", 1),
("Due Regard", "National Registry of Emergency Medical Technicians", 2),
("Paramedic", "National Registry of Emergency Medical Technicians", 2);

CREATE TABLE receivedCerts(
    receivedID INTEGER NOT NULL AUTO_INCREMENT,
    certID INTEGER NOT NULL,
    personID INTEGER NOT NULL,
    dateRecieved DATE NOT NULL,
    dateExpired DATE,
    PRIMARY KEY (recievedID),
    FOREIGN KEY (certID) REFERENCES certification(certID),
    FOREIGN KEY (personID) REFERENCES person(personID)
);

INSERT INTO receivedCerts(certID, personID, dateRecieved, dateExpired) VALUES
(1, 1, "2017-07-16", "2019-07-16"),
(4, 1, "2018-08-11", "2020-08-11"),
(6, 1, "2020-02-10", ""),
(7, 1, "2020-04-01", ""),
(8, 2, "2019-09-19", "2020-09-19"),
(1, 2, "2019-07-17", "2021-07-21"),
(9, 2, "2019-10-10", "2021-10-10"),
(10, 3, "2017-09-09", "2019-09-09"),
(1, 3, "2018-07-15", "2020-07-15"),
(3, 3, "2017-08-08", "2020-08-08"),
(9, 3, "2017-10-10", "2019-10-10");
