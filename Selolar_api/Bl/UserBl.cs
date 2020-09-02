using System;
using Dto;
using Dal;
namespace Bl
{
    public class UserBl
    {
        public static UserDto GetUserById(string id, string userName)
        {
         Userss u=   UserDal.GetUserById(id, userName);
            UserDto user = new UserDto(u);
            return user;
        }
    }
}