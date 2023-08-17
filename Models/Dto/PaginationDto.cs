using System;
namespace atcom_evaluacion_01.Models.Dto
{
	public class PaginationDto
	{
        public int Page { get; set; } = 1;
        private int perPage = 5;

        private readonly int cantidadMaximaPorPagina = 10;

        public int PerPage
        {
            get { return perPage; }
            set
            {
                perPage = (value > cantidadMaximaPorPagina) ? cantidadMaximaPorPagina : value;
            }
        }
    }
}

