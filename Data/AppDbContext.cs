using System;
using atcom_evaluacion_01.Models;
using atcom_evaluacion_01.Models.Dto;
using Microsoft.EntityFrameworkCore;

namespace atcom_evaluacion_01.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Pais> Pais { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }


    }
}

