using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ClientApp.Models;


namespace ClientApp.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        [Route("GetEventsList")]  
        public IEnumerable<string> GetEventsList()
        {
            List< EventModel> events = new List<EventModel>();
            addresseventsList.Add(new EventModel() {  EventName = "Calvin",EventDate = "12 Aug 2017", Address ="Main Street"});
            addresseventsList.Add(new EventModel() {  EventName = "Calvin",EventDate = "12 Aug 2017", Address ="Main Street"});
            addresseventsList.Add(new EventModel() {  EventName = "Calvin",EventDate = "12 Aug 2017", Address ="Main Street"});

            return events;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
