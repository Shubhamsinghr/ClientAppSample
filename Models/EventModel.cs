using System;

namespace ClientApp.Models
{
    Public Class EventModel
    {
        Public EventModel()
        {

        }

        Public EventModel(string name, string date, string address)
        {
                this.EventName = name;
                this.EventDate = date;
                this.Address = address;

        }

        Public string EventName { get; set; }
        Public string EventDate { get; set; }    
        Public string Address { get; set; } 

    }

}