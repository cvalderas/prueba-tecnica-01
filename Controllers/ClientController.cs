
using atcom_evaluacion_01.Data;
using atcom_evaluacion_01.Models;
using atcom_evaluacion_01.Models.Dto;
using atcom_evaluacion_01.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace atcom_evaluacion_01.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet("ef")]
        public async Task<ActionResult<IEnumerable<ClientDto>>> GetClientsUsingEF([FromQuery]PaginationDto paginationDto)
        {
            var queryable = (from clients in _context.Clientes
                                  join pais in _context.Pais on clients.CodigoPais equals pais.Codigo
                                  select new ClientDto
                                  {
                                      IdCliente = clients.IdCliente,
                                      Nombre = clients.Nombre,
                                      Telefono = clients.Telefono,
                                      Email = clients.Email,
                                      CodigoPais = clients.CodigoPais,
                                      NombrePais = pais.Descripcion
                                  }).AsQueryable();

            var clientes = await queryable.OrderBy(x => x.IdCliente).Paginate(paginationDto).ToListAsync();

            return clientes;
        }
    }
}

