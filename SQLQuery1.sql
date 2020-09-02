USE [SelolarNetwork]

alter table [dbo].[cellphonedeviceForUser]
--alter column userId nvarchar(25),
ADD CONSTRAINT Fk_userid foreign KEY (userId) references [dbo].[Userss]([userId]) 
 
 


