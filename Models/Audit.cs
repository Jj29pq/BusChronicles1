//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BusChronicles.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Audit
    {
        public int id_audit { get; set; }
        public Nullable<int> id_User { get; set; }
        public string viewaction { get; set; }
        public string action { get; set; }
        public Nullable<System.TimeSpan> date { get; set; }
    }
}