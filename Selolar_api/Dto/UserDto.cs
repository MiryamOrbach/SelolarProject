using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class UserDto
    {
        public string userId { get; set; }
        public string username { get; set; }
        public string passw { get; set; }

        public UserDto(Dal.Userss u)
        {
            this.userId = u.userId;
            this.username = u.username;
            this.passw = u.passw;
        }
    }
}
