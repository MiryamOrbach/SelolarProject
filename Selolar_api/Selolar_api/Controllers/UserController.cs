using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Dto;
using Bl;
namespace Selolar_api.Controllers
{
    [RoutePrefix("api/users")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("getUserById/{id}/{userName}")]
        public UserDto GetUserById([FromUri] string id,string userName)
        {
            UserDto u= UserBl.GetUserById(id, userName);
            if (u != null)
                return u;
            return null;
        }
        //[HttpGet]
        //[Route("login/{name}/{password}")]
        //public UserDto Login([FromUri]string name,string password)
        //{

        //}

        //פונקציות הוספה httppost
        //register get user  return true/false

        //הוספת מכשיר פלאפון *4
       //הוספת מכשיר פלאפון והוספת חברת סלולאר
       
    }
}
