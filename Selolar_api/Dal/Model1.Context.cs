﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class SelolarNetworkEntities : DbContext
    {
        public SelolarNetworkEntities()
            : base("name=SelolarNetworkEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Antenna> Antennas { get; set; }
        public virtual DbSet<cellphonedevice> cellphonedevices { get; set; }
        public virtual DbSet<CellPhoneDevice_ForNetworks> CellPhoneDevice_ForNetworks { get; set; }
        public virtual DbSet<cellphonedeviceCompany> cellphonedeviceCompanies { get; set; }
        public virtual DbSet<cellphonedeviceForUser> cellphonedeviceForUsers { get; set; }
        public virtual DbSet<Cellularnetwork> Cellularnetworks { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Recommendation> Recommendations { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<Userss> Usersses { get; set; }
    }
}
