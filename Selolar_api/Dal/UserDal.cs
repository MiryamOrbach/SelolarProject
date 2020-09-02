using System;
using System.Linq;
namespace Dal
{
    public class UserDal
    {
        public static Userss GetUserById(string userName, string passw)
        {
           using(SelolarNetworkEntities1 db = new SelolarNetworkEntities1())
            {
                try
                {
                    var user = db.Usersses.ToList().Where(u => u.passw == passw && userName == u.username).FirstOrDefault();  
                    return user;
                        //.Where(u => u.userId == id && u.username == userName).FirstOrDefault();
                }
                catch(Exception e)
                {
                    return null;
                }
            }
           
        }
    }
}