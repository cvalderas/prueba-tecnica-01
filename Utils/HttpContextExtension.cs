
using System;
using Microsoft.EntityFrameworkCore;

namespace atcom_evaluacion_01.Utils
{
    public static class HttpContextExtension
    {
        public async static Task InsertPaginationHeader<T>(this HttpContext httpContext, IQueryable<T> queryable)
        {
            if (httpContext == null)
                throw new ArgumentNullException(nameof(httpContext));

            double cantidad = await queryable.CountAsync();
            httpContext.Response.Headers.Add("CantidadTotalRegistros", cantidad.ToString());
        }
    }
}

