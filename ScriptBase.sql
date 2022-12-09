use c05881

Create table PRODUCT (
	name varchar(30) not null primary key,
	price decimal (18,2),
	type varchar(30),
	calories decimal (18,2),
	img image
)

Create table INGREDIENT (
	productName varchar(30),
	ingredient varchar(30)
	primary key (productName, ingredient)
	foreign key (productName) references PRODUCT(name)
)

-- Productos
Insert into PRODUCT (name,price,type,calories)
values('The double trouble',7.99,'hamburguesa',750),
('The moody bacon',6.99,'hamburguesa',690),('The fire strips',6.99,'pollo',660),
('The crusty fries',2.99,'papas',500),('The crispy risky',4.99,'hamburguesa',660),
('The classic patty',3.99,'hamburguesa',400),('The tasty rings',2.99,'rings',320),
('The chiz sandwich',4.99,'sandwich',350),('The bello porto',7.99,'hamburguesa',560)


-- Ingredientes
Insert into INGREDIENT 
values('The double trouble','Dos tortas angus'),
('The double trouble','Tocineta ahumada'),
('The double trouble','Queso Americano'),
('The double trouble','Lechuga fresca'),
('The double trouble','Tomate fresco'),
('The double trouble','Pepinillos')

Insert into INGREDIENT 
values('The moody bacon','Torta de res angus'),
('The moody bacon','Tocineta ahumada'),
('The moody bacon','Queso Americano'),
('The moody bacon','Lechuga fresca'),
('The moody bacon','Tomate fresco'),
('The moody bacon','Cebolla morada')

Insert into INGREDIENT 
values('The fire strips','Dedos de pollo empanizados'),
('The fire strips','Salsa de su gusto')

Insert into INGREDIENT 
values('The crusty fries','Papas a la francesa'),
('The crusty fries','Salsa de tomate')

Insert into INGREDIENT 
values('The crispy risky','Torta de pollo'),
('The crispy risky','Queso mozarella'),
('The crispy risky','Lechuga fresca'),
('The crispy risky','Tomate fresco')

Insert into INGREDIENT 
values('The classic patty','Torta de res angus'),
('The classic patty','Queso americano'),
('The classic patty','Ingrediente de su elección'),
('The classic patty','Tomate fresco')

Insert into INGREDIENT 
values('The tasty rings','Aros de cebolla empanizados'),
('The tasty rings','Salsa ranch de la casa')

Insert into INGREDIENT 
values('The chiz sandwich','Dos rebanadas de jamón'),
('The chiz sandwich','Tomate fresco'),
('The chiz sandwich','Lechuga fresca')

Insert into INGREDIENT 
values
('The bello porto','Hongo portobello'),
('The bello porto','Cebolla morada'),
('The bello porto','Tomate fresco'),
('The bello porto','Lechuga fresca')

Select * from PRODUCT

Select * from INGREDIENT

