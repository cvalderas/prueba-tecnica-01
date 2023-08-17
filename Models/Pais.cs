using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace atcom_evaluacion_01.Models
{
    public class Pais
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Codigo { get; set; }
        public string Descripcion { get; set; }
    }
}

