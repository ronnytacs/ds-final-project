USE final_project;

CREATE TABLE person (
  personID INTEGER NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip VARCHAR(5) NOT NULL,
  workPhone VARCHAR(10),
  mobilePhone VARCHAR(10),
  homePhone VARCHAR(10),
  dateOfBirth DATE NOT NULL,
  gender VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  radioNumber INTEGER NOT NULL,
  stationNumber INTEGER NOT NULL,
  isActive BOOL NOT NULL,
  email VARCHAR(255) NOT NULL,
  startDate DATE NOT NULL,
  department VARCHAR(255) NOT NULL,
  PRIMARY KEY (personID)
);

INSERT INTO person (firstName, lastName, address, city, state, zip, workPhone, mobilePhone, homePhone, dateOfBirth, gender, position, radioNumber, stationNumber, isActive, email, startDate, department) VALUES
("Kathryn", "Pryde", "1123 Xavier School Drive", "Watkinsville",  "GA", "30677", "7075551234", "7075552345", "", "1967-11-03", "Female", "Chief", "A-1", "9999", "Y", "kathryn.pryde@gmail.com", "2008-01-03", "ALL"),
("Piotr",  "Rasputin", "A31 Mother Russia Road", "Seattle", "WA", "98133", "", "2065559876","", "1977-08-09", "Male", "Fire Chief", "841", "8", "Y","piotr.rasputin@gmail.com", "2009-01-09", "Fire Suppression"
("Warren",  "Worthington III", "1140 Experiment Station Rd", "Watkinsville", "GA", "30677", "7065553945", "", "", "1988-07-09", "Male", "Fire Equipment Operator", "122", "1", "Y", "warren.worthington@gmail.com","2009-02-09","Fire Suppression"
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

CREATE TABLE recievedCerts(
    recievedID INTEGER NOT NULL,
    certID INTEGER NOT NULL,
    personID INTEGER NOT NULL,
    dateRecieved DATE NOT NULL,
    dateExpired DATE,
    PRIMARY KEY (recievedID),
    FOREIGN KEY (certID) REFERENCES certification(certID),
    FOREIGN KEY (personID) REFERENCES person(personID)
);
