using DreamedHouse.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamedHouse.Data;

/// <summary>
/// Class <c>AppDbContext</c> models the database context
/// </summary>
public partial class AppDbContext : DbContext
{
	/// <value>Property <c>DoorTypes</c> represents the DoorTypes Entity in dtabase context</value>
	public virtual DbSet<DoorType> DoorTypes { get; set; } = null!;

	/// <value>Property <c>FaucetTypes</c> represents the FaucetTypes Entity in dtabase context</value>
	public virtual DbSet<FaucetType> FaucetTypes { get; set; } = null!;

	/// <value>Property <c>FloorTypes</c> represents the FloorTypes Entity in dtabase context</value>
	public virtual DbSet<FloorType> FloorTypes { get; set; } = null!;

	/// <value>Property <c>Houses</c> represents the Houses Entity in dtabase context</value>
	public virtual DbSet<House> Houses { get; set; } = null!;

	/// <value>Property <c>HouseImages</c> represents the HouseImages Entity in dtabase context</value>
	public virtual DbSet<HouseImage> HouseImages { get; set; } = null!;

	/// <value>Property <c>Proformas</c> represents the Proformas Entity in dtabase context</value>
	public virtual DbSet<Proforma> Proformas { get; set; } = null!;

	/// <value>Property <c>Users</c> represents the Users Entity in dtabase context</value>
	public virtual DbSet<User> Users { get; set; } = null!;

	/// <summary>
	/// Constructor to initialize the AppDbContext class
	/// </summary>
	/// <param name="options">The options to be used by a DbContext.</param>
	public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

	/// <summary>
	/// Build the models according to the database
	/// </summary>
	/// <param name="modelBuilder">Builder which define the shape and relationships of the entities according to the database</param>
	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder
			.UseCollation("utf8_general_ci")
			.HasCharSet("utf8");

		modelBuilder.Entity<DoorType>(entity =>
		{
			entity.HasKey(doorType => doorType.DoorTypeId)
				.HasName("PRIMARY");

			entity.ToTable("door_types");

			entity.Property(doorType => doorType.DoorTypeId)
				.HasColumnType("int(11)")
				.HasColumnName("door_type_id");

			entity.Property(doorType => doorType.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(doorType => doorType.Name)
				.HasMaxLength(50)
				.HasColumnName("name");

			entity.Property(doorType => doorType.Price)
				.HasColumnType("double(5,2)")
				.HasColumnName("price");

			entity.Property(doorType => doorType.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");
		});

		modelBuilder.Entity<FaucetType>(entity =>
		{
			entity.HasKey(faucetType => faucetType.FaucetTypeId)
				.HasName("PRIMARY");

			entity.ToTable("faucet_types");

			entity.Property(faucetType => faucetType.FaucetTypeId)
				.HasColumnType("int(11)")
				.HasColumnName("faucet_type_id");

			entity.Property(faucetType => faucetType.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(faucetType => faucetType.Name)
				.HasMaxLength(50)
				.HasColumnName("name");

			entity.Property(faucetType => faucetType.Price)
				.HasColumnType("double(5,2)")
				.HasColumnName("price");

			entity.Property(faucetType => faucetType.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");
		});

		modelBuilder.Entity<FloorType>(entity =>
		{
			entity.HasKey(floorType => floorType.FloorTypeId)
				.HasName("PRIMARY");

			entity.ToTable("floor_types");

			entity.Property(floorType => floorType.FloorTypeId)
				.HasColumnType("int(11)")
				.HasColumnName("floor_type_id");

			entity.Property(floorType => floorType.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(floorType => floorType.Name)
				.HasMaxLength(50)
				.HasColumnName("name");

			entity.Property(floorType => floorType.Price)
				.HasColumnType("double(5,2)")
				.HasColumnName("price");

			entity.Property(floorType => floorType.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");
		});

		modelBuilder.Entity<House>(entity =>
		{
			entity.HasKey(house => house.HouseId)
				.HasName("PRIMARY");

			entity.ToTable("houses");

			entity.Property(house => house.HouseId)
				.HasColumnType("int(11)")
				.HasColumnName("house_id");

			entity.Property(house => house.BathroomsNumber)
				.HasColumnType("int(11)")
				.HasColumnName("bathrooms_number");

			entity.Property(house => house.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(house => house.FloorsNumber)
				.HasColumnType("int(11)")
				.HasColumnName("floors_number");

			entity.Property(house => house.Name)
				.HasMaxLength(100)
				.HasColumnName("name");

			entity.Property(house => house.Price)
				.HasColumnType("double(10,2)")
				.HasColumnName("price");

			entity.Property(house => house.RoomsNumber)
				.HasColumnType("int(11)")
				.HasColumnName("rooms_number");

			entity.Property(house => house.SquareMeters)
				.HasColumnType("int(11)")
				.HasColumnName("square_meters");

			entity.Property(house => house.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");
		});

		modelBuilder.Entity<HouseImage>(entity =>
		{
			entity.HasKey(houseImage => houseImage.ImageId)
				.HasName("PRIMARY");

			entity.ToTable("house_images");

			entity.HasIndex(houseImage => houseImage.HouseId, "fk_house_images_houses");

			entity.Property(houseImage => houseImage.ImageId)
				.HasColumnType("int(11)")
				.HasColumnName("image_id");

			entity.Property(houseImage => houseImage.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(houseImage => houseImage.HouseId)
				.HasColumnType("int(11)")
				.HasColumnName("house_id");

			entity.Property(houseImage => houseImage.ImageUrl)
				.HasMaxLength(255)
				.HasColumnName("image_url");

			entity.Property(houseImage => houseImage.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");

			entity.HasOne(houseImage => houseImage.House)
				.WithMany(house => house.HouseImages)
				.HasForeignKey(houseImage => houseImage.HouseId)
				.HasConstraintName("fk_house_images_houses");
		});

		modelBuilder.Entity<Proforma>(entity =>
		{
			entity.HasKey(proforma => proforma.ProformaId)
				.HasName("PRIMARY");

			entity.ToTable("proformas");

			entity.HasIndex(proforma => proforma.DoorTypeId, "fk_proformas_door_types");

			entity.HasIndex(proforma => proforma.FaucetTypeId, "fk_proformas_faucet_types");

			entity.HasIndex(proforma => proforma.FloorTypeId, "fk_proformas_floor_types");

			entity.HasIndex(proforma => proforma.HouseId, "fk_proformas_house");

			entity.HasIndex(proforma => proforma.UserId, "fk_proformas_user");

			entity.Property(proforma => proforma.ProformaId)
				.HasColumnType("int(11)")
				.HasColumnName("proforma_id");

			entity.Property(proforma => proforma.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(proforma => proforma.DoorTypeId)
				.HasColumnType("int(11)")
				.HasColumnName("door_type_id");

			entity.Property(proforma => proforma.FaucetTypeId)
				.HasColumnType("int(11)")
				.HasColumnName("faucet_type_id");

			entity.Property(proforma => proforma.FloorTypeId)
				.HasColumnType("int(11)")
				.HasColumnName("floor_type_id");

			entity.Property(proforma => proforma.HouseId)
				.HasColumnType("int(11)")
				.HasColumnName("house_id");

			entity.Property(proforma => proforma.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");

			entity.Property(proforma => proforma.UserId)
				.HasColumnType("int(11)")
				.HasColumnName("user_id");

			entity.HasOne(proforma => proforma.DoorType)
				.WithMany()
				.HasForeignKey(proforma => proforma.DoorTypeId)
				.OnDelete(DeleteBehavior.ClientSetNull)
				.HasConstraintName("fk_proformas_door_types");

			entity.HasOne(proforma => proforma.FaucetType)
				.WithMany()
				.HasForeignKey(proforma => proforma.FaucetTypeId)
				.OnDelete(DeleteBehavior.ClientSetNull)
				.HasConstraintName("fk_proformas_faucet_types");

			entity.HasOne(proforma => proforma.FloorType)
				.WithMany()
				.HasForeignKey(proforma => proforma.FloorTypeId)
				.OnDelete(DeleteBehavior.ClientSetNull)
				.HasConstraintName("fk_proformas_floor_types");

			entity.HasOne(proforma => proforma.House)
				.WithMany()
				.HasForeignKey(proforma => proforma.HouseId)
				.OnDelete(DeleteBehavior.ClientSetNull)
				.HasConstraintName("fk_proformas_house");

			entity.HasOne(proforma => proforma.User)
				.WithMany()
				.HasForeignKey(proforma => proforma.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull)
				.HasConstraintName("fk_proformas_user");
		});

		modelBuilder.Entity<User>(entity =>
		{
			entity.HasKey(e => e.UserId)
				.HasName("PRIMARY");

			entity.ToTable("users");

			entity.HasIndex(user => user.Dni, "dni")
				.IsUnique();

			entity.HasIndex(user => user.Email, "email")
				.IsUnique();

			entity.HasIndex(user => user.PhoneNumber, "phone_number")
				.IsUnique();

			entity.Property(user => user.UserId)
				.HasColumnType("int(11)")
				.HasColumnName("user_id");

			entity.Property(user => user.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(user => user.Dni)
				.HasMaxLength(10)
				.HasColumnName("dni");

			entity.Property(user => user.Email)
				.HasMaxLength(50)
				.HasColumnName("email");

			entity.Property(user => user.FirstName)
				.HasMaxLength(150)
				.HasColumnName("first_name");

			entity.Property(user => user.LastName)
				.HasMaxLength(150)
				.HasColumnName("last_name");

			entity.Property(user => user.Password)
				.HasMaxLength(60)
				.HasColumnName("password");

			entity.Property(user => user.PhoneNumber)
				.HasMaxLength(10)
				.HasColumnName("phone_number");

			entity.Property(user => user.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");
		});

		OnModelCreatingPartial(modelBuilder);
	}

	partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
