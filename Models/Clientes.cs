using System;
using Microsoft.EntityFrameworkCore;

namespace atcom_evaluacion_01.Models
{
    [Keyless]
    public class Clientes
    {
        public decimal IdCliente { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public int CodigoPais { get; set; }
    }
}

