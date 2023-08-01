CREATE TABLE Customer (
  CustomerID Serial,
  Name VARCHAR(255),
  AddressID Int,
  Email VARCHAR(100),
  Phone VARCHAR(15),
  PRIMARY KEY (CustomerID)
);

CREATE TABLE Address (
AddressID Serial,
Line1 Varchar(255),
Line2 Varchar(255),
Line3 Varchar(255),
Postcode Varchar(7),
Country Varchar(20),
CustomerID Int,
PRIMARY KEY (AddressID)
);

CREATE TABLE Orders (
  OrderID Serial,
  ProductID Int,
  CustomerID Int,
  AddressID Int,
  PaymentID Int,
  PRIMARY KEY (OrderID)
);

CREATE TABLE Product (
  ProductID Serial,
  Name VARCHAR(255),
  Price Int,
  PRIMARY KEY (ProductID)
);