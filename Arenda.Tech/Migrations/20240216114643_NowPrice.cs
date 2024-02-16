using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Arenda.Tech.Migrations
{
    public partial class NowPrice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "OldPrice",
                table: "Products",
                newName: "NowPrice");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NowPrice",
                table: "Products",
                newName: "OldPrice");
        }
    }
}
