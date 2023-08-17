using System;
using atcom_evaluacion_01.Models.Dto;

namespace atcom_evaluacion_01.Utils
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Paginate<T>(this IQueryable<T> queryable, PaginationDto paginacionDTO)
        {
            return queryable
                .Skip((paginacionDTO.Page - 1) * paginacionDTO.PerPage)
                .Take(paginacionDTO.PerPage);
        }
    }
}

