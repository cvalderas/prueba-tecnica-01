using System;
namespace atcom_evaluacion_01.Models.Dto
{
	public class ClientDto
	{
        public decimal IdCliente { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public int CodigoPais { get; set; }
        public string NombrePais { get; set; }
    }
}

